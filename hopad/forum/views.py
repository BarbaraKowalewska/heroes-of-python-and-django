from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Category, Topic, Post
from .forms import NewTopicForm


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
            full_form = form.save(commit=False)
            full_form.user = request.user
            full_form.save()
            return redirect('forum:forum_home')
        return render(request, self.template_name, {'form': form})




