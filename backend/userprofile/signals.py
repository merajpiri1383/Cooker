from django.dispatch import receiver 
from django.db.models.signals import post_save
from django.contrib.auth import get_user_model 
from userprofile.models import Profile
@receiver(post_save,sender=get_user_model())
def create_profile(sender,instance,created,**kwargs):
    print("user is change")
    profile = Profile.objects.get_or_create(user=instance)
    print(profile)