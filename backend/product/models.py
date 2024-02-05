from django.db import models
from django.contrib.auth import get_user_model
from django_jalali.db.models import jDateTimeField
product_type = [
    ("wet","wet"),
    ("cake","cake"),
    ("dry","dry"),
    ("bread","bread"),
    ("outhers","outhers") 
]
class Product(models.Model):
    title = models.CharField(max_length=300)
    picture = models.ImageField(upload_to="pictures",null=True,blank=True)
    deposit = models.IntegerField()
    price = models.IntegerField(null=True,blank=True)
    weight = models.IntegerField(null=True,blank=True)
    type = models.CharField(max_length=15,choices=product_type,default="dry")
    time = jDateTimeField(auto_now_add=True)
    description = models.TextField(null=True,blank=True)
    def __str__(self):
        return f"{self.title} | {self.price}"
class Image(models.Model):
    pastry = models.ForeignKey(to=Product,on_delete=models.CASCADE,related_name="images")
    image = models.ImageField(upload_to="images")
    def __str__(self):
        return f"{self.pastry.title} | image" 