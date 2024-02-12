from rest_framework.views import APIView
from userprofile.models import Profile
from userprofile.permissions import IsOwnProfilePermission
from userprofile.serializers import ProfileSerializer
from rest_framework.response import Response 
class ProfileAPIView(APIView):
    permission_classes = [IsOwnProfilePermission]
    def get(self,request,phone): 
        profile,created = Profile.objects.get_or_create(user_id=phone) 
        serializer = ProfileSerializer(profile)
        self.check_object_permissions(self.request,profile)
        return Response(data=serializer.data)
    def patch(self,request,phone):
        profile,created = Profile.objects.get_or_create(user_id=phone) 
        try :
            if request.data["image"] == "delete" :
                profile.image = None
                profile.save()
        except :
            pass
        serializer = ProfileSerializer(data=request.data,instance=profile,partial=True)
        if serializer.is_valid() :
            serializer.save()
            return Response(data=serializer.data)
        else :
            print(serializer.errors)
            return Response(data=serializer.errors)