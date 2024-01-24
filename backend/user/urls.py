from django.urls import path 
from user import views 
urlpatterns = [
    path("login/",views.UserAuthAPIView.as_view(),name="auth"),
    path("verify/<mobile>/",views.UserVerifyAPIView.as_view(),name="verify"),
]