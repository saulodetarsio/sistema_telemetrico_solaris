import sys
import paho.mqtt.client as mqtt # importa o pacote mqtt
import threading 
import time
from datetime import datetime
import numpy as np
import random


broker = "192.168.0.107" # define o host do broker mqtt'
port = 1883 # define a porta do broker
keppAlive = 60 # define o keepAlive da conexao
topic = 'app/' # define o topico que este script assinara


vector = [122.90, 45.22, 22.59, 107.25, 3.14, 2.7, 15.15, 99.02]

# funcao on_connect sera atribuida e chamada quando a conexao for iniciada
# ela printara na tela caso tudo ocorra certo durante a tentativa de conexao
# tambem ira assina o topico que foi declarado acima
def on_connect(client, userdata, flags, rc):
    client.subscribe(topic)


#Ficará publicando dados aleátórios para o canal no qual está escrito, que é renderizar\
try:
    client = mqtt.Client("publicador") # instancia a conexao
    client.on_connect = on_connect # define o callback do evento on_connect
    client.connect(broker, port, keppAlive) # inicia a conexao


    #Mandar dados aleatórios
    e = threading.Event()
    while not e.wait(2):
        a = random.randint(-1,7)
        b = random.randint(-1,7)
        c = random.randint(-1,7)
        d = random.randint(-1,7)
        e1 = random.randint(-1,7)

        el1 = vector[a]
        el2 = vector[b]
        el3 = vector[c]
        el4 = vector[d]
        el5 = vector[e1]
        
        string = [el1, el2, el3, el4, el5]
        str1 = ' '.join(str(e) for e in string)


        print("Publicando: ", string)
        client.publish(topic, str1)
            
    client.loop_forever() # a conexao mqtt entrara em loop ou seja, ficara escutando e processando todas mensagens recebidas

except KeyboardInterrupt:
    print ("\nScript finalizado.")
    #GPIO.cleanup()
    sys.exit(0)