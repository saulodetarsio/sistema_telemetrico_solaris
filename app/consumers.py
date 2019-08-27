
import paho.mqtt.client as mqtt # importa o pacote mqtt
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import json
import threading
import sys


broker = "localhost" # define o host do broker mqtt'
port = 1883 # define a porta do broker
keppAlive = 60 # define o keepAlive da conexao
topic = 'app/'


conectados = []

class AppConsumer(WebsocketConsumer):

    def on_connect(self, client, userdata, flags, rc):
        client.subscribe(topic)

    def on_message(self, client, userdata, msg):
        message = str(msg.payload) # converte a mensagem recebida
        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message
        }))

    def connect(self):
        self.accept()
        u = self.scope["user"]
        
        try:
            client = mqtt.Client() # instancia a conexao
            client.on_connect = self.on_connect # define o callback do evento on_connect
            client.on_message = self.on_message # define o callback do evento on_message
            client.connect(broker, port, keppAlive) # inicia a conexao
            conectados.append([str(u), client])
            client.loop_start()

        except KeyboardInterrupt:
            print ("\nScript finalizado.")
            sys.exit(0)

    def disconnect(self, close_code):
        u = self.scope["user"]
        for a in conectados:
            print(a)
            if str(u) == a[0]:
                a[1].disconnect()
                conectados.remove(a)