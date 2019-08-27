# chat/routing.py
from django.conf.urls import url

from . import consumers

#Necessário para criar as conexões entre Websockets e o core do Django.
websocket_urlpatterns = [
    url(r'^ws/app/', consumers.AppConsumer)
]