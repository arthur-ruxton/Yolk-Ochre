# Generated by Django 3.2.9 on 2021-12-05 16:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('like', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='like',
            old_name='user',
            new_name='artwork',
        ),
    ]