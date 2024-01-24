from django.urls import path 
from userprofile import views
urlpatterns = [
    path("<pk>/",views.ProfileAPIView.as_view(),name="profile"),
]