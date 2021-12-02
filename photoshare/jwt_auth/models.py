from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser

# django already has PW & PW confirmation & Username
# email is not required by default - we must add it to the model if we want it to be required
# by defining fields on our model which extends the django class, we make them required

class User(AbstractUser):
    email = models.CharField(max_length = 50, unique=True)
    first_name = models.CharField(max_length = 50)
    last_name = models.CharField(max_length = 50)
    bio = models.CharField(max_length = 200)
    profile_image = models.CharField(max_length = 300)

