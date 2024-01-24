from rest_framework.permissions import BasePermission ,SAFE_METHODS
class StaffStatePermission(BasePermission):
    def has_permission(self,request,view):
        if request.method in SAFE_METHODS :
            return True 
        else :
            user = request.user 
            if user.is_authenticated :
                return user.is_staff | user.is_master | user.is_superuser
            else :
                return False