from rest_framework import serializers 
from userprofile.models import Profile 
class ProfileSerializer(serializers.ModelSerializer):
    class Meta : 
        model = Profile 
        fields = ["user","username","image","age","experience_age","chef_type","address"]