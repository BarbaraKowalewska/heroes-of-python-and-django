from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import api_views

app_name = 'api_forum'
urlpatterns = [
    path('', api_views.ApiCategories.as_view(), name='api_categories'),
    path('<str:category_name>/', api_views.ApiTopicsOfCertainCategory.as_view(),
         name='api_topics-of_certain_category'),
    path('<str:category_name>/topic-<int:topic_id>', api_views.ApiPostsOfCertainTopic.as_view(),
         name='api_posts_of_certain_topic'),
]

urlpatterns = format_suffix_patterns(urlpatterns)