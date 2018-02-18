from django.http import HttpResponse
from posts.models import Post, Comment
from posts.serializers import PostSerializer, PostListSerializer, CommentSerializer
from rest_framework import viewsets, pagination, permissions

class StandardResultsSetPagination(pagination.PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 10

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-post_date')
    serializer_class = PostSerializer
    pagination_class = StandardResultsSetPagination
    def get_serializer_class(self):
        if self.action == 'list':
            return PostListSerializer
        return PostSerializer

class CommentViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

