# chat/consumers.py
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import json
import threading
import sys
import paho.mqtt.client as mqtt # importa o pacote mqtt


broker = "localhost" # define o host do broker mqtt'
port = 1883 # define a porta do broker
keppAlive = 60 # define o keepAlive da conexao
topic = 'app/'

class AppConsumer(WebsocketConsumer):
    
    def on_connect(self, client, userdata, flags, rc):
        print("[STATUS] Conectado ao Broker. Resultado de conexao: "+str(rc))
        client.subscribe(topic)

    def on_message(self, client, userdata, msg):
        message = str(msg.payload) # converte a mensagem recebida
        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message
        }))


    def inicializar_renderizacao(self):
        try:
            print("[STATUS] Inicializando MQTT...")
            client = mqtt.Client() # instancia a conexao
            client.on_connect = self.on_connect # define o callback do evento on_connect
            client.on_message = self.on_message # define o callback do evento on_message
            client.connect(broker, port, keppAlive) # inicia a conexao
            client.loop_forever() # a conexao mqtt entrara em loop ou seja, ficara escutando e processando todas mensagens recebidas

        except KeyboardInterrupt:
            print ("\nScript finalizado.")
            #GPIO.cleanup()
            sys.exit(0)
        

    def connect(self):
        self.room_name = "bismarck"
        self.room_group_name = "equipe"

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()
        print("Inicializar transmisssão...")
        self.inicializar_renderizacao()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )

    # Receive message from room group
    def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message
        }))