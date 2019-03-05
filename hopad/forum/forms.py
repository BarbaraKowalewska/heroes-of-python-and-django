from django import forms

from .models import Topic, Post


class NewTopicForm(forms.ModelForm):
    class Meta:
        model = Topic
        fields = ['title', 'category', 'content']


class NewPostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['content']
