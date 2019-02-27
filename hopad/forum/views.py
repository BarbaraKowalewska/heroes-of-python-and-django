from django.shortcuts import render


from .models import Categories


def forum_home(request):
    categories = Categories.objects

    context = {'categories': categories }
    return render(request,'forum/forum_home.html', context)
