from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import CategorySerializer, TopicSerializer, PostSerializer
from ..models import Category, Topic, Post


class ApiCategories(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


class ApiTopicsOfCertainCategory(APIView):
    def get(self, request, *args, **kwargs):
        category_id = Category.objects.get(name=self.kwargs['category_name']).id
        topics = Topic.objects.filter(category=category_id)
        serializer = TopicSerializer(topics, many=True)
        return Response(serializer.data)


class ApiPostsOfCertainTopic(APIView):
    def get(self, request, *args, **kwargs):
        posts = Post.objects.filter(topic=self.kwargs['topic_id'])
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
