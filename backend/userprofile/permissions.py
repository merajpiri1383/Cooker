from rest_framework.permissions import BasePermission
class IsOwnProfilePermission(BasePermission):
    def has_object_permission(self,request,view,object):
        return bool(object.user == request.user or request.user.is_superuser)