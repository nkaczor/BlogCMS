from django.db import models


class Post(models.Model):
    post_text = models.TextField()
    post_date = models.DateTimeField('date published')
    def __str__(self):
        return self.post_text

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    comment_text = models.TextField()
    comment_date = models.DateTimeField('date published')
    comment_author = models.CharField(max_length=100)
    def __str__(self):
        return self.comment_text