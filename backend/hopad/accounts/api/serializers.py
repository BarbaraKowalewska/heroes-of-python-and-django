from django.contrib.auth.models import User
from rest_framework import serializers

from forum.models import Post, Topic
from ..models import Account


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserBasicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')


class AccountSerializerWithPosts(serializers.ModelSerializer):
    topics = serializers.SerializerMethodField()
    posts = serializers.SerializerMethodField()

    def get_topics(self, account):
        topics = Topic.objects.filter(user=account.user_id)
        from forum.api.serializers import TopicSerializer
        return TopicSerializer(topics, many=True).data

    def get_posts(self, account):
        posts = Post.objects.filter(user=account.user_id)
        from forum.api.serializers import PostSerializer
        return PostSerializer(posts, many=True).data

    class Meta:
        model = Account
        fields = '__all__'

    def to_representation(self, obj):
        serialized_data = super(AccountSerializerWithPosts, self).to_representation(obj)
        user_id = serialized_data.get('user')
        user = User.objects.get(pk=user_id)
        user_serialized = UserSerializer(user)
        serialized_data['user'] = user_serialized.data
        return serialized_data


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'
