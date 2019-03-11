from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from accounts.forms import UserRegisterForm, ProfileUpdate


def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username} You can now log in!')
            return redirect('accounts:profile')
    else:
        form = UserRegisterForm()
    return render(request, 'accounts/register.html', {'form': form})


@login_required
def profile(request):
    if request.method == 'POST':
        form = ProfileUpdate(request.POST, request.FILES, instance=request.user.account)
        if form.is_valid():
            form.save()
            messages.success(request, f'Your account has been updated')
            return redirect('accounts:profile')
    else:
        form = ProfileUpdate(instance=request.user)
    return render(request, 'accounts/profile.html', {'form': form})
