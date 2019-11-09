from django.conf.urls import url

from . import consumers

#Necessário para criar as conexões entre Websockets e o core do Django.
websocket_urlpatterns = [
    url(r'^ws/app/medidas', consumers.AppConsumer),
    url(r'^ws/app/loc', consumers.MapaConsumer),
]
