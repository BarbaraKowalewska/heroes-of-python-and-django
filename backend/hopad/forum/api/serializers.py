from rest_framework import serializers
from ..models import Post, Category, Topic


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('topic', 'content', 'creation_date', 'user', 'score')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'summary', 'image')


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ('title', 'category', 'creation_date', 'user', 'content', 'pinned')
