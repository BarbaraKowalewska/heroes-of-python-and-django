from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Category, Topic, Post
from .forms import NewTopicForm, NewPostForm


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