# Generated by Django 3.2.9 on 2021-12-06 12:03

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('art', '0007_auto_20211206_1143'),
    ]

    operations = [
        migrations.AlterField(
            model_name='art',
            name='likes',
            field=models.ManyToManyField(related_name='likers', to=settings.AUTH_USER_MODEL),
        ),
    ]
