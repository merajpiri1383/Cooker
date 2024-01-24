from django.urls import path 
from product import views 
urlpatterns = [
    # products edits
    path("",views.ProductListAPIView.as_view(),name="products"),
    path("<pk>/",views.ProductRetrieveView.as_view(),name="product"),
    path("<pk>/update/",views.ProductUpdateAPIView.as_view(),name="product-update"),
    path("<pk>/delete/",views.ProductDeleteAPIView.as_view(),name="product-delete"),
]