from settings.models import Setting 
from rest_framework.serializers import ModelSerializer 
class SettingSerializer(ModelSerializer):
    class Meta :
        model = Setting 
        fields = ["brand","background_image","default_product_image"]