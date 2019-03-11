from rest_framework import serializers

from ..models import Post, Category, Topic


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'


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
