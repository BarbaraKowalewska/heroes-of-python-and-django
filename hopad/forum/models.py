from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='forum/category/', default='forum/category/default/default.jpg')
    summary = models.CharField(max_length=200)
