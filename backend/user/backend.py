from django.contrib.auth.backends import ModelBackend 
from rest_framework.authtoken.models import Token
class UserBackendAPI(ModelBackend):
    def authenticate(self,request,token):
        print("authenticate is work")
        try :
            r = Token.objects.get(key=token)
            if r :
                return r.user
            else :
                return None
        except :
            return None
