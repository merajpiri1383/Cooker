from rest_framework.generics import (ListCreateAPIView ,RetrieveAPIView,RetrieveDestroyAPIView
        ,RetrieveUpdateAPIView)
from product.models import Product
from product.serializers import ProductSerializer
from product.permissions import StaffStatePermission
from product.pagination import ProductPagination
# every one state permission
class ProductAPIView:
    http_method_names = ["get"]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [StaffStatePermission]
    pagination_class = ProductPagination
class ProductListAPIView(ProductAPIView,ListCreateAPIView):
    http_method_names = ["get","post"]
class ProductRetrieveView(ProductAPIView,RetrieveAPIView):
    pass 
# master state permission 
class ProductDeleteAPIView(ProductAPIView,RetrieveDestroyAPIView):
    http_method_names = ["delete","get"]
class ProductUpdateAPIView(ProductAPIView,RetrieveUpdateAPIView):
    http_method_names = ["put","get"]