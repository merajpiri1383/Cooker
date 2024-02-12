from django.contrib.auth import get_user_model 
from userprofile.serializers import ProfileSerializer
from rest_framework import serializers 
class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()
    class Meta : 
        model = get_user_model()
        fields = "__all__"
    def update(self,instance,validated_data):
        profile = validated_data.get("profile")
        if validated_data.get("is_active") :
            instance.is_active = validated_data.get("is_active")
        if validated_data.get("is_chef") :
            instance.is_chef = validated_data.get("is_chef")
        if validated_data.get("is_staff") :
            instance.is_staff = validated_data.get("is_staff")
        instance.save()
        if profile:
            if profile.get("age") :
                instance.profile.age = profile.get("age")
            if profile.get("experience_age") :
                instance.profile.experience_age = profile.get("experience_age")
            if profile.get("otp_code") :
                instance.profile.otp_code = profile.get("otp_code")
            if profile.get("chef_type") : 
                instance.profile.chef_type = profile.get("chef_type")
            if profile.get("address") : 
                instance.profile.address = profile.get("address")
            if profile.get("username") :
                instance.profile.username = profile.get("username")
            if profile.get("image") :
                instance.profile.image  = profile.get("profile")
            instance.profile.save()
        return instance
class UserAuthSerializer(serializers.ModelSerializer):
    class Meta :
        model = get_user_model() 
        fields = ["mobile"]