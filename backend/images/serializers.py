from rest_framework import serializers, viewsets, pagination
from images.models import Image

class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'image', 'width', 'height')
