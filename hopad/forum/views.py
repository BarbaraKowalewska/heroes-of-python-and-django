from django.shortcuts import render


from .models import Category, Topic, Post


def forum_home(request):
    categories = Category.objects
    context = {'categories': categories }
    return render(request,'forum/forum_home.html', context)

def forum_topics(request, name):
    category_id = Category.objects.get(name = name).id
    topics = Topic.objects.filter(category = category_id)
    context = {'topics': topics}
    return render(request, 'forum/forum_topics.html', context)