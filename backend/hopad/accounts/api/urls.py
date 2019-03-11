from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import api_views

app_name = 'api_accounts'
urlpatterns = [
    path('account-<int:account_id>/', api_views.ApiAccountView.as_view(), name='api_account_view'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
