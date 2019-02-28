from django.urls import path


from . import views

app_name = 'forum'
urlpatterns = [
    path('', views.forum_home, name='forum_home'),
    path('<str:category_name>/topics', views.forum_topics, name='forum_topics'),
    path('<str:category_name>/topics/<int:topic_id>', views.forum_posts, name='forum_posts')
]

