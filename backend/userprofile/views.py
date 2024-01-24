from rest_framework.generics import RetrieveUpdateAPIView
from userprofile.models import Profile
from userprofile.permissions import IsOwnProfilePermission
from userprofile.serializers import ProfileSerializer
class ProfileAPIView(RetrieveUpdateAPIView):
    http_method_names = ["get","put","patch"]
    serializer_class = ProfileSerializer 
    queryset = Profile.objects.all()
    permission_classes = [IsOwnProfilePermission]