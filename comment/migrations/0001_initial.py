# Generated by Django 3.2.9 on 2021-12-08 16:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('art', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(max_length=300)),
                ('art', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='art.art')),
            ],
        ),
    ]
