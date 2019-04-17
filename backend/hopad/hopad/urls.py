"""hopad URL Configuration

The `urlpatterns` list routes URLs to containers. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function containers
    1. Add an import:  from my_app import containers
    2. Add a URL to urlpatterns:  path('', containers.home, name='home')
Class-based containers
    1. Add an import:  from other_app.containers import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin

from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('landing_page.api.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('forum/', include('forum.urls')),
    path('accounts/', include('accounts.urls')),
    path('api/forum/', include('forum.api.urls')),
    path('api/accounts/', include('accounts.api.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
