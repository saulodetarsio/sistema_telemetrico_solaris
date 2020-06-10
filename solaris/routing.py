# mysite/routing.py
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import app.routing


#Para a conexão via websockets possa acontecer
application = ProtocolTypeRouter({
    'websocket': AuthMiddlewareStack(
        URLRouter(
            app.routing.websocket_urlpatterns,
        )
    ),
})
