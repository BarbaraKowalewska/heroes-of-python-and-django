from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='forum/categories/images/', default='forum/categories/images/default.jpg')
    summary = models.CharField(max_length=200)
