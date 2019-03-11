from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.shortcuts import render, redirect
from django.views import View

from .forms import NewTopicForm, NewPostForm
from .models import Category, Topic, Post


def forum_home(request):
    categories = Category.objects
    context = {'categories': categories}
    return render(request, 'forum/forum_home.html', context)


def forum_topics(request, category_name):
    category_id = Category.objects.get(name=category_name).id
    topics = Topic.objects.filter(category=category_id)
    context = {
        'topics': topics,
        'category_name': category_name
    }
    return render(request, 'forum/forum_topics.html', context)


def forum_posts(request, category_name, topic_id):
    posts = Post.objects.filter(topic=topic_id)
    context = {
        'category_name': category_name,
        'topic_id': topic_id,
        'posts': posts
    }
    return render(request, 'forum/forum_posts.html', context)


class NewTopic(LoginRequiredMixin, View):
    form_class = NewTopicForm
    initial = {'key': 'value'}
    template_name = 'forum/new_topic.html'

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            topic = form.save(commit=False)
            topic.user = request.user
            topic.save()
            return redirect('forum:forum_posts',
                            category_name=topic.category,
                            topic_id=topic.id)
        return render(request, self.template_name, {'form': form})


class NewPost(LoginRequiredMixin, View):
    form_class = NewPostForm
    initial = {'key': 'value'}
    template_name = 'forum/new_post.html'

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form,
                                                    'category_name': self.kwargs['category_name'],
                                                    'topic_id': self.kwargs['topic_id']})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.topic = Topic.objects.get(pk=self.kwargs['topic_id'])
            post.user = request.user
            post.save()
            return redirect('forum:forum_posts',
                            category_name=self.kwargs['category_name'],
                            topic_id=self.kwargs['topic_id'])
        return render(request, self.template_name, {'form': form})


class DeletePost(LoginRequiredMixin, UserPassesTestMixin, View):

    def test_func(self):
        post_id = self.kwargs['post_id']
        post_author = Post.objects.get(pk=post_id).user
        if self.request.user == post_author:
            return True
        return False

    def post(self, request, **kwargs):
        post_id = kwargs['post_id']
        Post.objects.filter(pk=post_id).delete()
        return redirect('forum:forum_posts',
                        category_name=self.kwargs['category_name'],
                        topic_id=self.kwargs['topic_id'])


class DeleteTopic(LoginRequiredMixin, UserPassesTestMixin, View):

    def test_func(self):
        topic_id = self.kwargs['topic_id']
        topic_author = Topic.objects.get(pk=topic_id).user
        if self.request.user == topic_author:
            return True
        return False

    def post(self, request, **kwargs):
        topic_id = kwargs['topic_id']
        Topic.objects.filter(pk=topic_id).delete()
        return redirect('forum:forum_topics',
                        category_name=self.kwargs['category_name'])
