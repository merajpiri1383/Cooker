# Generated by Django 5.0.1 on 2024-02-05 17:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('settings', '0003_remove_setting_is_active'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='setting',
            name='name',
        ),
    ]
