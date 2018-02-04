from django.urls import path
from django.conf.urls import url, include
from posts.models import Post
from django.contrib import admin
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets, pagination
from posts.views import PostViewSet
from rest_framework.documentation import include_docs_urls
# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('posts/', include('posts.urls')),
    path('admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^docs/', include_docs_urls(title='My API title'))
]