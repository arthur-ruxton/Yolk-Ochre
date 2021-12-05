# Generated by Django 3.2.9 on 2021-12-03 14:32

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0010_alter_user_following'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='following',
            field=models.ManyToManyField(related_name='followers', to=settings.AUTH_USER_MODEL),
        ),
    ]