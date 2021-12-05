from django.db import models
# from jwt_auth.models import User

# Create your models here.

class Like(models.Model):
    artwork = models.ForeignKey(
        "art.Art",
        related_name="likes",
        on_delete=models.CASCADE
    )
    likes = models.BooleanField(default=True)

    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="user_who_likes",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.likes}"