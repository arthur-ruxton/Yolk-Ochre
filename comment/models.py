from django.db import models
from jwt_auth.models import User

# Create your models here.

from django.db import models

class Comment(models.Model):
    text = models.TextField()
    art = models.ForeignKey("art.Art", on_delete=models.CASCADE)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Comment: {self.text}"