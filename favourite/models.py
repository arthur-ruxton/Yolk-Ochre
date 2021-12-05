from django.db import models
# from jwt_auth.models import User

# Create your models here.

class Favourite(models.Model):
    user = models.ForeignKey(
        "jwt_auth.User",
        related_name="favourited",
        # symmetrical=False,
        on_delete=models.CASCADE
    )
    favourited = models.BooleanField(default=True)

    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="favouriter",
        # symmetrical=False,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.favourited}"