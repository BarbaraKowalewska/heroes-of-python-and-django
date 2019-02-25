from django.shortcuts import render

def index(request):
    context = {
        'people': 'basia, adam, janek'
    }
    return render(request, 'forum/index.html', context)