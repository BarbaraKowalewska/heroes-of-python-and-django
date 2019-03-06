from django.urls import path

from . import views

app_name = 'forum'
urlpatterns = [
    path('', views.forum_home, name='forum_home'),
    path('<str:category_name>/topics', views.forum_topics, name='forum_topics'),
    path('new-topic', views.NewTopic.as_view(), name='new_topic'),
    path('<str:category_name>/topics/<int:topic_id>', views.forum_posts, name='forum_posts'),
    path('<str:category_name>/topics/<int:topic_id>/delete', views.DeleteTopic.as_view(), name='delete_topic'),
    path('<str:category_name>/topics/<int:topic_id>/new-post', views.NewPost.as_view(), name='new_post'),
    path('<str:category_name>/topics/<int:topic_id>/<int:post_id>/delete', views.DeletePost.as_view(),
         name='delete_post'),
]
