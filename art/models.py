from django.db import models
from jwt_auth.models import User

# Create your models here.
class Art(models.Model):
    image = models.CharField(max_length=100,)
    caption = models.CharField(max_length=100,)
    location = models.CharField(max_length=100,)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

def __str__(self):
    return f"art post caption: {self.caption}, owner: {self.owner}"