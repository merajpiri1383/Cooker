from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth import get_user_model 
class UserManager(BaseUserManager):
    def create_user(self,mobile,password=None,**extra_fields):
        user = self.model(mobile=mobile,**extra_fields)
        extra_fields.setdefault("is_active",True)
        if password :
            user.set_password(password)
        user.save()
        return user
    def create_superuser(self,mobile,password=None,**extra_fields):
        extra_fields.setdefault("is_active",True)
        extra_fields.setdefault("is_staff",True)
        extra_fields.setdefault("is_chef",True)
        extra_fields.setdefault("is_master",True)
        extra_fields.setdefault("is_superuser",True)
        print("create superuser")
        return self.create_user(mobile=mobile,password=password,**extra_fields)