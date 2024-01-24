from rest_framework.permissions import BasePermission 
class MasterStatePermission(BasePermission):
    def has_permission(self,request,view):
        if request.user.is_authenticated :
            return request.user.is_superuser or request.user.is_master
        else :
            return False
class MasterEditUserPermission(BasePermission):
    def has_permission(self, request, view):
        state = True
        if request.user.is_authenticated :
            if request.user.is_master :
                for field in request.data :
                    if field in ["is_active","is_chef","is_staff","profile"] :
                        if field == "profile" :
                            for field in request.data.get("profile") :
                                if not  field == "chef_type" :
                                   state = False
                    else :
                        state = False
            else :
                state = False
        else :
            state = False
        return state