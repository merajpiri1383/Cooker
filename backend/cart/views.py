from rest_framework.generics import ListAPIView, RetrieveAPIView,UpdateAPIView
from rest_framework.views import APIView
from cart.models import Cart, Order
from cart.serializers import  OrderSerializer,CartSerializer
from cart.permissions import ChefStateSeePermission,ChefStateChangeIsReadyPermission
from rest_framework.response import Response
from rest_framework import status
## cheff permission state
# just see all list carts
class CartAPI:
    http_method_names = ["get"]
    queryset = Cart.objects.filter(is_paid=True, is_sent=False, is_open=False)
    serializer_class = CartSerializer
    permission_classes = [ChefStateSeePermission]
class OrderListAPIView(CartAPI,ListAPIView):
    pass
class CartAPIView(CartAPI,RetrieveAPIView):
    pass
# update just is_ready and see
class OrderUpdateJustSeeAPIView(APIView):
    permission_classes = [ChefStateChangeIsReadyPermission]
    def get(self, request, pk):
        try:
            cart_product = Order.objects.get(id=pk)
        except:
            cart_product = None
        serializer = OrderSerializer(cart_product)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    def patch(self, request, pk):
        try:
            cart_product = Order.objects.get(id=pk)
        except:
            cart_product = None
        serializer = OrderSerializer(instance=cart_product,data=request.data,partial=True)
        if serializer.is_valid():
            print("valid")
            serializer.save()
            return Response(data=serializer.data,status=status.HTTP_200_OK)
        else :
            print("invalid") 
            return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)