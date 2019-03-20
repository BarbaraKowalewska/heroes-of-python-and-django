from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .serializers import CategorySerializer, TopicSerializer, PostSerializer
from ..models import Category, Topic, Post


class ApiCategories(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


class ApiCertainCategory(APIView):
    def get(self, request, *args, **kwargs):
        category = Category.objects.get(name=self.kwargs['category_name'])
        serializer = CategorySerializer(category)
        return Response(serializer.data)


class ApiTopicsOfCertainCategory(APIView):
    def get(self, request, *args, **kwargs):
        category_id = Category.objects.get(name=self.kwargs['category_name']).id
        topics = Topic.objects.filter(category=category_id)
        serializer = TopicSerializer(topics, many=True)
        return Response(serializer.data)


class ApiCertainTopic(APIView):
    def get(self, request, *args, **kwargs):
        topic = Topic.objects.get(pk=self.kwargs['topic_id'])
        serializer = TopicSerializer(topic)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TopicSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        topic = Topic.objects.get(pk=self.kwargs['topic_id'])
        serializer = TopicSerializer(topic, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        topic = Topic.objects.get(pk=self.kwargs['topic_id'])
        topic.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ApiPostsOfCertainTopic(APIView):
    def get(self, request, *args, **kwargs):
        posts = Post.objects.filter(topic=self.kwargs['topic_id'])
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)


class ApiCertainPost(APIView):
    def get(self, request, *args, **kwargs):
        post = Post.objects.get(pk=self.kwargs['post_id'])
        serializer = PostSerializer(post)
        return Response(serializer.data)