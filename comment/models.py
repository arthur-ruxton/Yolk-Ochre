from django.db import models
from jwt_auth.models import User

# Create your models here.

from django.db import models

class Comment(models.Model):
    text = models.TextField(max_length=300)
    art = models.ForeignKey("art.Art", related_name="comments", on_delete=models.CASCADE)
    owner = models.ForeignKey(User, related_name="comments", on_delete=models.CASCADE)

    def __str__(self):
        return f"Comment: {self.text}"