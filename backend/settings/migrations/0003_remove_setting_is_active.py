# Generated by Django 5.0.1 on 2024-02-05 17:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('settings', '0002_alter_setting_background_image_alter_setting_brand_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='setting',
            name='is_active',
        ),
    ]
