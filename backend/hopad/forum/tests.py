import datetime

from django.contrib.auth import views as auth_views
from django.contrib.auth.models import User, AnonymousUser
from django.test import TestCase, RequestFactory
from django.utils import timezone

from .models import Category, Topic, Post
from .views import NewTopic


class CategoryModelTest(TestCase):
    def setUp(self):
        Category.objects.create(name='test_category', summary='test_summary')

    def test_if_model_is_created(self):
        self.assertEquals(Category.objects.count(), 1)

        Category.objects.create(name='test_category2', summary='test_summary')
        self.assertEquals(Category.objects.count(), 2)

    def test_if_model_is_created_with_correct_default_values(self):
        test_category = Category.objects.get(name='test_category')
        self.assertEquals(test_category.image, 'forum/category/default/default.jpg')

    def test_if_model_prints_correct_data(self):
        test_category = Category.objects.get(name='test_category')
        self.assertEquals(str(test_category), test_category.name)


class TopicModelTest(TestCase):
    def setUp(self):
        test_category = Category.objects.create(name='test_category', summary='test_summary')
        test_user = User.objects.create(username='john', password='johnpassword')
        Topic.objects.create(title='test_title', category=test_category,
                             user=test_user, content='test_content')

    def test_if_model_is_created(self):
        self.assertEquals(Topic.objects.count(), 1)

        Topic.objects.create(title='test_title2', category=Category.objects.get(name='test_category'),
                             user=User.objects.get(username='john'),
                             content='test_content2')

        self.assertEquals(Topic.objects.count(), 2)

    def test_if_model_is_created_with_correct_default_values(self):
        test_topic = Topic.objects.get(title='test_title')
        current_time = timezone.now()
        time_minute_ago = timezone.now() - datetime.timedelta(minutes=1)
        self.assertEquals(test_topic.pinned, False)
        self.assertLess(test_topic.creation_date, current_time)
        self.assertGreater(test_topic.creation_date, time_minute_ago)


class PostModelTest(TestCase):
    def setUp(self):
        test_category = Category.objects.create(name='test_category', summary='test_summary')
        test_user = User.objects.create(username='john', password='johnpassword')
        test_topic = Topic.objects.create(title='test_title', category=test_category,
                                          user=test_user, content='test_content')
        Post.objects.create(user=test_user, topic=test_topic, content='test_content')

    def test_if_model_is_created(self):
        self.assertEquals(Post.objects.count(), 1)

        Post.objects.create(user=User.objects.get(username='john'),
                            topic=Topic.objects.get(title='test_title'),
                            content='test_content')
        self.assertEquals(Post.objects.count(), 2)

    def test_if_model_is_created_with_correct_default_values(self):
        test_post = Post.objects.get(content='test_content')
        current_time = timezone.now()
        time_minute_ago = timezone.now() - datetime.timedelta(minutes=1)
        self.assertEquals(test_post.score, 0)
        self.assertLess(test_post.creation_date, current_time)
        self.assertGreater(test_post.creation_date, time_minute_ago)


class NewTopicViewTest(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name='test_category', summary='test_summary')
        self.factory = RequestFactory()
        self.user = User.objects.create_user(username='john',
                                             email='johns@email.com',
                                             password='johnpassword')

    def test_get_method_if_logged_in(self):
        request = self.factory.get('/forum/new-topic')
        request.user = self.user
        response = NewTopic.as_view()(request)
        self.assertEqual(response.status_code, 200)

    def test_get_method_if_not_logged_in(self):
        request = self.factory.get('/forum/new-topic')
        request.user = AnonymousUser()
        response = auth_views.LoginView.as_view()(request)
        self.assertEqual(response.status_code, 200)

    def test_if_post_method_creates_new_topic_if_logged_in(self):
        self.assertEquals(Topic.objects.count(), 0)
        request = self.factory.post('/forum/new-topic', data={'title': 'aaa',
                                                              'category': self.category.id,
                                                              'content': 'aaa'})
        request.user = self.user
        response = NewTopic.as_view()(request)
        self.assertEquals(Topic.objects.count(), 1)
        self.assertEqual(response.status_code, 302)
