from django.db import models
# from jwt_auth.models import User

# Create your models here.

class Follows(models.Model):
    user = models.ForeignKey(
        "jwt_auth.User",
        related_name="following",
        # symmetrical=False,
        on_delete=models.CASCADE
    )
    following = models.BooleanField(default=True)

    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="follower",
        # symmetrical=False,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.follow}"