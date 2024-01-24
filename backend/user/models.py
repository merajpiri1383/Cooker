from django.db import models
from user.manager import UserManager
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin
from django_jalali.db.models import jDateField
from django.core.exceptions import ValidationError
class User(AbstractBaseUser,PermissionsMixin):
    def mobile_validate(value):
        error = None
        for char in value :
            if not char.isdigit() :
                error = "mobile must be a number ."
        if len(value) < 8 :
            error = "mobile number must be more than 8 character"
        if len(value) > 13 :
            error = "mobile number must be less than 13 character"
        if error :
            raise ValidationError(error)
        return value
    mobile = models.SlugField(primary_key=True,validators=[mobile_validate])
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_chef = models.BooleanField(default=False)
    is_master = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    joind = jDateField(auto_now_add=True)
    objects = UserManager()
    USERNAME_FIELD = "mobile"
    REQUIRED_FIELDS = []
    def __str__(self):
        return str(self.mobile)