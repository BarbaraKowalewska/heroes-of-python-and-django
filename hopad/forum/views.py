from django.shortcuts import render


from .models import Category


def forum_home(request):
    categories = Category.objects

    context = {'categories': categories }
    return render(request,'forum/forum_home.html', context)
