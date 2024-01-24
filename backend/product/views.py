from rest_framework.generics import (ListCreateAPIView ,RetrieveAPIView,RetrieveDestroyAPIView
        ,RetrieveUpdateAPIView,CreateAPIView,ListAPIView)
from product.models import Image,Product
from product.serializers import ProductSerializer
from rest_framework.permissions import AllowAny
from product.permissions import StaffStatePermission
# every one state permission
class ProductAPIView:
    http_method_names = ["get"]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [StaffStatePermission]
class ProductListAPIView(ProductAPIView,ListCreateAPIView):
    http_method_names = ["get","post"]
class ProductRetrieveView(ProductAPIView,RetrieveAPIView):
    pass 
# master state permission 
class ProductDeleteAPIView(ProductAPIView,RetrieveDestroyAPIView):
    http_method_names = ["delete","get"]
class ProductUpdateAPIView(ProductAPIView,RetrieveUpdateAPIView):
    http_method_names = ["put","get"]