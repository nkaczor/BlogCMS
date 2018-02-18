from django.db import models
from django.conf import settings
import os

def get_uploadto(instance, filename):
    ''' Dummy callable to silence the upload_to field of FileFields '''
    return os.path.join(settings.STATIC_URL, 'uploads', filename)

class Image(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='uploads/', blank=True, null=True, height_field='height', width_field='width')
    height = models.IntegerField(default=0)
    width = models.IntegerField(default=0)
