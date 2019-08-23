from django.contrib import admin
from django.urls import path
from django.conf.urls import include

#caminhos raizes das aplicações deste escopo
#A aplicação de administração default, o admin/
# e a aplicação app, o software que irá renderizar as informações
urlpatterns = [
    path('admin/', admin.site.urls),
    path('app/', include('app.urls')),
]