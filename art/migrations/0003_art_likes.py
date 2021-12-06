# Generated by Django 3.2.9 on 2021-12-06 11:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('art', '0002_art_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='art',
            name='likes',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='liker', to='jwt_auth.user'),
            preserve_default=False,
        ),
    ]
