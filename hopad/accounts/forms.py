from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from accounts.models import Account

class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields= ['username', 'email', 'password1', 'password2']



class ProfileUpdate(forms.ModelForm):
    class Meta:
        model = Account
        fields = ['bio', 'favorite_town', 'footer_phrase', 'image']
