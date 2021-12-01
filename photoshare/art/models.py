from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Art(models.Model):
    image = models.CharField(max_length=100),
    caption = models.CharField(max_length=100),
    location = models.CharField(max_length=100)
    owner = models.ManyToManyField(User, blank=True)

def __str__(self):
    return "Art" + self.name 