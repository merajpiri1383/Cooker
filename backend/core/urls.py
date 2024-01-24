from django.contrib import admin
from django.urls import path,re_path as url,include
from django.views.static import serve 
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path("products/",include("product.urls")),
    path("carts/",include("cart.urls")),
    path("profile/",include("userprofile.urls")), 
    path("master/",include("master.urls")),
    path("accounts/",include("user.urls")),
]
if settings.DEBUG : 
    urlpatterns = urlpatterns + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)