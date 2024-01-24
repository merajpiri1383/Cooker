from django.urls import path 
from master import views 
urlpatterns = [
    # staff list 
    path("staffs/",views.StaffListAPIView.as_view(),name="staffs"),
    # chef list 
    path("chefs/",views.ChefListAPIView.as_view(),name="chefs"),
    # edit user state 
    path("edit/<pk>/",views.EditUserAPIView.as_view(),name="edit-user-state")
]