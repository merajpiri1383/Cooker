# Generated by Django 5.0.1 on 2024-01-22 11:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='otp_code',
        ),
    ]
