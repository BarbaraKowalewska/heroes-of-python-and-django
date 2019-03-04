from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='forum/category/', default='forum/category/default/default.jpg')
    summary = models.CharField(max_length=200)

class Topic(models.Model):
    title = models.CharField(max_length=50)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    creation_date = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    pinned = models.BooleanField()

class Post(models.Model):
    creation_date = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    score = models.IntegerField()
