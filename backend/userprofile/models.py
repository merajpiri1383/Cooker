from django.db import models
from django.contrib.auth import get_user_model 
from django.core.validators import MaxValueValidator,MinValueValidator
cheff_types = [
    ("wet","wet maker"),
    ("dry","dry maker"),
    ("cake","cake maker"),
    ("bread","bread maker"),
    ("none","not a chef")
]
class Profile(models.Model):
    user = models.OneToOneField(to=get_user_model(),on_delete=models.CASCADE,related_name="profile")
    username = models.CharField(max_length=300,blank=True,null=True)
    image = models.ImageField(upload_to="profiles",blank=True,null=True)
    age = models.PositiveIntegerField(validators=[MinValueValidator(10),MaxValueValidator(80)],
                                    blank=True,null=True)
    experience_age = models.FloatField(validators=[MaxValueValidator(50),MinValueValidator(0)],
                                    blank=True,null=True)
    chef_type = models.CharField(max_length=15,choices=cheff_types,default="none")
    address = models.TextField(null=True,blank=True)
    def __str__(self):
        return f"{self.user.mobile} profile" 