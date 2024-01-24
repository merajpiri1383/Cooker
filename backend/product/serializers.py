from rest_framework import serializers 
from django.contrib.auth import get_user_model 
from product.models import Product,Image
class ProductSerializer(serializers.ModelSerializer):
    class Meta :
        model = Product
        fields = ["id","title","picture","deposit","price","weight","time","description"]
        read_only_fields = ["id","date","time"]
    def to_representation(self,instance):
        reprenentation = super(ProductSerializer,self).to_representation(instance)
        reprenentation["time"] = instance.time.strftime("%H:%M:%S")
        reprenentation["date"] = instance.time.strftime("%Y:%m:%d")
        return reprenentation