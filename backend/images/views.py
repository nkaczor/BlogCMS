from django.shortcuts import render
from rest_framework import viewsets, pagination
from images.models import Image
from images.serializers import ImagesSerializer

# Create your views here.
class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImagesSerializer

