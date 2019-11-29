import sys
import paho.mqtt.client as mqtt # importa o pacote mqtt
import threading 
import time
from datetime import datetime
import numpy as np
import random


broker = "192.168.0.102" # define o host do broker mqtt'
port = 1883 # define a porta do broker
keppAlive = 60 # define o keepAlive da conexao
topico_medidas = 'app/medidas' # define o topico que este script assinara
topico_loc = 'app/loc'
periodo = 0.5

medidas= ["01.9", "55.2", "02.1", "07.2", "83.1", "12.7", "12.1", "99.0"]
#latitudes = ["-22.754219", "-22.753863", "-22.753032", "-22.752557", "-22.752201", "-22.751726", "-22.751290", "-22.750815", "-22.750499", "-22.750499", "-22.750895", "-22.751330", "-22.752003", "-22.752794", "-22.753665", "-22.754219", "-22.754219"];
#longitudes = [ "-41.889753", "-41.890998", "-41.892929", "-41.893573", "-41.894088", "-41.894560", "-41.894045", "-41.893358", "-41.892328", "-41.891170", "-41.890054", "-41.889238", "-41.888466", "-41.888080", "-41.888080", "-41.888680", "-41.889968"];

latitudes = [-22754219, -22753863, -22753032, -22752557, -22752201, -22751726, -22751290, -22750815, -22750499, -22750499, -22750895, -22751330, -22752003, -22752794, -22753665, -22754219, -22754219];
longitudes = [-41889753, -41890998, -41892929, -41893573, -41894088, -41894560, -41894045, -41893358, -41892328, -41891170, -41890054, -41889238, -41888466, -41888080, -41888080, -41888680, -41889968];


# funcao on_connect sera atribuida e chamada quando a conexao for iniciada
# ela printara na tela caso tudo ocorra certo durante a tentativa de conexao
# tambem ira assina o topico que foi declarado acima
def on_connect(client, userdata, flags, rc):
    client.subscribe(topico_medidas)


#Ficará publicando dados aleátórios para o canal no qual está escrito, que é renderizar\
try:
    client = mqtt.Client("publicador") # instancia a conexao
    client.on_connect = on_connect # define o callback do evento on_connect
    client.connect(broker, port, keppAlive) # inicia a conexao

    cont = 0

    #Mandar dados aleatórios
    e = threading.Event()
    while not e.wait(periodo):
        #para as medidas
        a = random.randint(-1,7)
        b = random.randint(-1,7)
        c = random.randint(-1,7)
        d = random.randint(-1,7)
        e1 = random.randint(-1,7)
        el1 = medidas[a]
        el2 = medidas[b]
        el3 = medidas[c]
        el4 = medidas[d]
        el5 = medidas[e1]

        #para a localizacao
        lat = latitudes[cont]
        lng = longitudes[cont]

        loc = '['+str(lat)+','+str(lng)+']'

        if(cont == 16):
            cont = 0;

        cont = cont+1

        string = [el1, el2, el3, el4, el5]
        str1 = ','.join(str(e) for e in string)
        str2 = '['+str1+']'

        print("Publicando: {} e {}".format(str2, loc))
        client.publish(topico_medidas, str2)
        client.publish(topico_loc, loc)
            
    client.loop_forever() # a conexao mqtt entrara em loop ou seja, ficara escutando e processando todas mensagens recebidas

except KeyboardInterrupt:
    print ("\nScript finalizado.")
    #GPIO.cleanup()
    sys.exit(0)
