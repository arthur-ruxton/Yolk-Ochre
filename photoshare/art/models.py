from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Art(models.Model):
    image = models.CharField(max_length=100, default='-')
    caption = models.CharField(max_length=100, default='-')
    location = models.CharField(max_length=100, default='-')
    #owner = models.ForeignKey("user.User", on_delete=models.CASCADE)

def __str__(self):
    return "Art" + self.name 