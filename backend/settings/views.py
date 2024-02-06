from master.permissions import MasterStatePermission
from settings.models import Setting
from settings.serializers import SettingSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView 
class SettingsAPIView(APIView):
    def get(self,request):
        setting = Setting.objects.all().first()
        serializer = SettingSerializer(setting)
        return Response(data=serializer.data)
    def post(self,request):
        print("post is worl")
        print(request.data)
        instance= Setting.objects.all().first()
        serializer = SettingSerializer(data=request.data,instance=instance)
        if serializer.is_valid() :
            serializer.save() 
            return Response(data=serializer.data,status=status.HTTP_200_OK)
        else :
            return Response(data=serializer.data) 
    def delete(self,request,type):
        setting = Setting.objects.all().first()
        if type == "background_image" :
            setting.background_image = None 
        if type == "brand" : 
            setting.brand = None
        if type == "default_product_image":
            setting.default_product_image = None 
        setting.save() 
        serializer = SettingSerializer(setting)
        return Response(data=serializer.data)