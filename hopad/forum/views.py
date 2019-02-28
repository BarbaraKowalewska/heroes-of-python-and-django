from django.shortcuts import render


from .models import Category, Topic, Post


def forum_home(request):
    categories = Category.objects
    context = {'categories': categories }
    return render(request,'forum/forum_home.html', context)

def forum_topics(request, category_name):
    category_id = Category.objects.get(name = category_name).id
    topics = Topic.objects.filter(category = category_id)
    context = {
        'topics': topics,
        'category_name': category_name
    }
    return render(request, 'forum/forum_topics.html', context)


def forum_posts(request, category_name, topic_id):
    posts = Post.objects.filter(topic = topic_id)
    context = {
        'category_name': category_name,
        'posts': posts
        }
    return render(request, 'forum/forum_posts.html', context)