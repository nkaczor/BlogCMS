from rest_framework import serializers, viewsets, pagination
from posts.models import Post, Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('comment_author', 'comment_text', 'comment_date', 'post', 'id')

class PostSerializer(serializers.HyperlinkedModelSerializer):
    comments = CommentSerializer(source='parent_post', many=True)
    class Meta:
        model = Post
        fields = ('post_text', 'post_title', 'post_date', 'id', 'comments')

class PostListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('post_text', 'post_title', 'post_date', 'id')
