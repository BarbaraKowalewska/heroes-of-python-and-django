from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import api_views

app_name = 'api_forum'
urlpatterns = [
    path('categories/', api_views.ApiCategories.as_view(), name='api_categories'),
    path('categories/<str:category_name>/', api_views.ApiCertainCategory.as_view(), name='api_certain_category'),
    path('categories/<str:category_name>/topics', api_views.ApiTopicsOfCertainCategory.as_view(),
         name='api_topics_of_certain_category'),
    path('categories/<str:category_name>/topics/<int:topic_id>/', api_views.ApiCertainTopic.as_view(),
         name='api_certain_topic'),
    path('categories/<str:category_name>/topics/<int:topic_id>/posts/', api_views.ApiPostsOfCertainTopic.as_view(),
         name='api_posts_of_certain_topic'),
    path('categories/<str:category_name>/topics/<int:topic_id>/posts/<int:post_id>',
         api_views.ApiCertainPost.as_view(),
         name='api_certain_post'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
