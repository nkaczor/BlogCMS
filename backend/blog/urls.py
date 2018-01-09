from django.urls import include, path
from django.contrib import admin

urlpatterns = [
    path('posts/', include('posts.urls')),
    path('admin/', admin.site.urls),
]