from django.urls import path
from django.conf.urls import url, include
from posts.models import Post
from django.contrib import admin
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets, pagination
from posts.views import PostViewSet, CommentViewSet
from images.views import ImageViewSet
from rest_framework.documentation import include_docs_urls
import os
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'images', ImageViewSet)

urlpatterns = [
    path('posts/', include('posts.urls')),
    path('images/', include('images.urls')),
    path('admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^docs/', include_docs_urls(title='My API title'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)