from django.urls import path
from cart import views 
urlpatterns = [
    # see all carts by cheff
    path("",views.OrderListAPIView.as_view(),name="carts"),
    # just see cart 
    path("<pk>/",views.CartAPIView.as_view(),name="cart"),
    # see and update one cart by cheff
    path("<pk>/cart-products-update/",views.OrderUpdateJustSeeAPIView.as_view(),name="cart-product-update"),
] 