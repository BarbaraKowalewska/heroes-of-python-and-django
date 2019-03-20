from django.contrib.auth.models import User
from rest_framework import serializers

from accounts.models import Account
from ..models import Category, Topic, Post


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class TopicSerializer(serializers.ModelSerializer):
    account = serializers.SerializerMethodField()
    post_count = serializers.SerializerMethodField()

    def get_account(self, topic):
        account = Account.objects.get(user=topic.user_id)
        from accounts.api.serializers import AccountSerializer
        return AccountSerializer(account).data


    def get_post_count(self, topic):
        post_count = Post.objects.filter(topic=topic.pk).count()
        return post_count


    class Meta:
        model = Topic
        fields = '__all__'

    def to_representation(self, obj):
        serialized_data = super(TopicSerializer, self).to_representation(obj)

        serialized_data['category'] = Category.objects.get(pk=serialized_data.get('category')).name

        user_id = serialized_data.get('user')
        user = User.objects.get(pk=user_id)
        from accounts.api.serializers import UserBasicInfoSerializer
        user_serialized = UserBasicInfoSerializer(user)
        serialized_data['user'] = user_serialized.data
        return serialized_data


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


# class PostDetailSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Post
#         fields = ('id', 'topic', 'content', 'creation_date', 'user', 'score')
#
    # def to_representation(self, obj):
    #     serialized_data = super(PostDetailSerializer, self).to_representation(obj)
    #     user_id = serialized_data.get('user')
    #     user = User.objects.get(pk=user_id)
    #     user_serialized = UserBasicInfoSerializer(user)
    #     account = Account.objects.get(user=user_id)
    #     account_serialized = AccountSerializer(account)
    #     serialized_data['user'] = {'user': user_serialized.data, 'account': account_serialized.data}
    #     return serialized_data
