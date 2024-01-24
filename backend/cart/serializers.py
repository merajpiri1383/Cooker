from rest_framework import serializers 
from django.contrib.auth import get_user_model 
from product.models import Product
from cart.models import Cart , Order
from product.serializers import ProductSerializer
class OrderSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta :
        model = Order
        fields = ["id","cart","product","count","is_ready"]
class CartSerializer(serializers.ModelSerializer):
    orders = OrderSerializer(source="orders",many=True)
    class Meta : 
        model = Cart  
        fields = ["id","user","is_open","is_paid","is_sent","orders"] 