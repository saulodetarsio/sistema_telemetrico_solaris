from django.db import models
from django.contrib.auth.models import User

# Create your models here.

#Usuário da aplicacao
#É derivado do usuário nativo do django
class UserProfileInfo(models.Model):
	user = models.OneToOneField(User,on_delete=models.CASCADE)



#Modelo Boia
#Apresenta duas informações: a latitude e longitude
class Boia(models.Model):
	latitude = models.CharField(max_length=50)
	longitude = models.CharField(max_length=50)

