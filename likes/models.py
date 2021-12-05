from django.db import models

# Create your models here.
# from jwt_auth.models import User

# Create your models here.

class Like(models.Model):
    user = models.ForeignKey(
        "art.Art",
        related_name="art_to_like",
        on_delete=models.CASCADE
    )
    Like = models.BooleanField(default=True)

    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="user_who_likes",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.Like}"