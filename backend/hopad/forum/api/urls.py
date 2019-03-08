from django.urls import path

from . import views

app_name = 'api'
urlpatterns = [
    path('categories', views.ApiCategories.as_view(), name='api_categories'),
]
