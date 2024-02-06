from django.db import models
class Setting(models.Model):
    brand = models.ImageField(upload_to="brands",blank=True,null=True)
    background_image = models.ImageField(upload_to="backgrounds",blank=True,null=True)
    default_product_image = models.ImageField(upload_to="default_image_products",blank=True,null=True)