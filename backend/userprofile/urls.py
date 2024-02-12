from django.urls import path 
from userprofile import views
urlpatterns = [
    path("<phone>/",views.ProfileAPIView.as_view(),name="profile"), 
]