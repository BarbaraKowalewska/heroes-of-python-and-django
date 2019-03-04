from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth


def signup(request):
    if request.method == 'POST':
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.get(username=request.POST['username'])
                # TODO addresses should not be kept in Strings - use variables
                return render(request, 'accounts/signup.html', {'error': 'username has already been taken'})
            except User.DoesNotExist:
                user = User.objects.create_user(request.POST['username'], password=request.POST['password1'])
                auth.login(request, user)
                return redirect('forum:forum_home')
        else:
            # TODO addresses should not be kept in Strings - use variables
            return render(request, 'accounts/signup.html', {'error': 'passwords must match'})
    else:
        # TODO addresses should not be kept in Strings - use variables
        return render(request, 'accounts/signup.html')


def login(request):
    if request.method == 'POST':
        user = auth.authenticate(username=request.POST['username'], password=request.POST['password'])
        if user is not None:
            auth.login(request, user)
            return redirect('forum:forum_home')
        else:
            # TODO addresses should not be kept in Strings - use variables
            return render(request, 'accounts/login.html', {'error': 'username or password is incorrect.'})

    else:
        # TODO addresses should not be kept in Strings - use variables
        return render(request, 'accounts/login.html')


def logout(request):
    if request.method == 'POST':
        auth.logout(request)
        return redirect('forum:forum_home')
    #TODO need to route to homepage
    return render(request, 'accounts/signup.html')


