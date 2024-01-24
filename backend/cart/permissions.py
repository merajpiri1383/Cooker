from rest_framework.permissions import BasePermission ,SAFE_METHODS
class ChefStateSeePermission(BasePermission):
    def has_permission(self,request,view):
        user = request.user 
        if request.user.is_authenticated :
            if request.method in SAFE_METHODS :
                return user.is_staff
            else :
                return user.is_master | user.is_superuser | user.is_chef
        else :
            return False
class ChefStateChangeIsReadyPermission(BasePermission):
    def has_permission(self,request,view):
        for field in request.data.keys() :
            if field != "is_ready":
                return False
        return True