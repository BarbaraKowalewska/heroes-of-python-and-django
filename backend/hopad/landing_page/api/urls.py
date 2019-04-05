from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import api_views

app_name = 'api_landing_page'
urlpatterns = [
    path('', api_views.ApiApplications.as_view(), name='api_applications')
]

urlpatterns = format_suffix_patterns(urlpatterns)
