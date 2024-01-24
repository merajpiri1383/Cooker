from django.db import models
from django.contrib.auth import get_user_model
from product.models import Product
class Cart(models.Model):
    user = models.ForeignKey(to=get_user_model(),on_delete=models.CASCADE,related_name="carts")
    created = models.DateTimeField(auto_now_add=True)
    is_paid = models.BooleanField(default=False)
    is_open = models.BooleanField(default=True)
    is_sent = models.BooleanField(default=False)
    def __str__(self):
        return f"{self.user.mobile} | cart |  is paid {self.is_paid}"
class Order(models.Model):
    cart = models.ForeignKey(to=Cart,on_delete=models.CASCADE,related_name="orders")
    product = models.ForeignKey(to=Product,on_delete=models.CASCADE)
    count = models.PositiveIntegerField(default=1)
    is_ready = models.BooleanField(default=False)
    def __str__(self):
        return f"{self.product.title} | {self.count}"