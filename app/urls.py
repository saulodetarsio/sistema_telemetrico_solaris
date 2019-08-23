from django.conf.urls import url
from django.urls import path
from app import views 


#nome do app
app_name = "app"


#A relação entre as ações e os paths presentes nesta aplicação.
urlpatterns = [
	path('', views.index, name='index'),   #ação e path -> index, que é a página das medidas da embarcação
	path('mapa', views.mapa, name='mapa'), #ação e path -> mapa que é renderizado, auxiliando na geolocalização
	path('login/', views.user_login, name="user_login"), #ação e path -> login do usuário
	path('logout/', views.user_logout, name="user_logout"), #ação e path -> logout do usuário
	path('register/', views.register, name="user_register"), #ação e path -> registro de usuário
	path('adicionar_boias/', views.adicionar_boias, name="adicionar_boias"), #ação e path -> quando há a necessidade de adicionar boias
	path('boias/', views.get_boias, name="boias"), #ação e path -> retorna as boias adicionadas para compor o circuito de prova
	path('apagar_boias/', views.delete_boias, name="deletar_boias"), #ação e path -> quando a necessida de se apagar todas as boias

	path('ver_dependencias', views.ver_dependencias, name="ver_dependencias")
]