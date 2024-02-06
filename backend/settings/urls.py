from django.urls import path 
from settings import views 
urlpatterns = [
    path("",views.SettingsAPIView.as_view(),name="setting"),
    path("<type>/",views.SettingsAPIView.as_view(),name="setting"),
]