from rest_framework.generics import ListAPIView,RetrieveUpdateDestroyAPIView
from django.contrib.auth import get_user_model 
from user.serializers import UserSerializer
from master.permissions import MasterStatePermission ,MasterEditUserPermission
# see staff list 
class UserAPI :
    serializer_class = UserSerializer 
    queryset = get_user_model().objects.filter(is_staff=True,is_master=False,is_superuser=False)
    permission_classes = [MasterStatePermission]
class StaffListAPIView(UserAPI,ListAPIView):
    pass 
# see chef list 
class ChefListAPIView(UserAPI,ListAPIView):
    queryset = get_user_model().objects.filter(is_master=False,is_superuser=False,is_chef=True)
# edit user state 
class EditUserAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer 
    queryset = get_user_model().objects.filter(is_master=False,is_superuser=False)
    permission_classes = [MasterEditUserPermission]