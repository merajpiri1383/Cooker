# Generated by Django 5.0.1 on 2024-01-22 12:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_user_otp_code'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='otp_code',
        ),
    ]
