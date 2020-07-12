//Carregar esse sketch na porta COM 4
#include<SoftwareSerial.h>
#include<SD.h>
#include <Ethernet.h>
//#include <PubSubClient.h>
#include <SPI.h>

// Update these with values suitable for your network.
//byte mac[]    = {  0xDE, 0xED, 0xBA, 0xFE, 0xFE, 0xED };
//IPAddress ip(192,168,0,222); 
//IPAddress server(192,168,0,252);


SoftwareSerial ss(8,9);
//EthernetClient ethClient;
//PubSubClient client(ethClient);   

//File myFile;
char mensagem[47];
byte index = 0;

void setup() {
  Serial.begin(9600);
  ss.begin(9600);
  /**
  if (!SD.begin(4)) {
    Serial.println("Falha ao iniciar SD!!!");
    Serial.println("Desligue o arduino e insira um SD!");
    while (1);
  }
  Serial.println("SD iniciado!.");

   client.setServer(server, 1883);
     Ethernet.begin(mac, ip);
    **/
    
     delay(2000);
}


void reconnect() {
  // Loop until we're reconnected
  /**
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect("arduinoClient")) {
      Serial.println("connected");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }**/
}

//[13.5,60.7,82.4,04.7,87.1,-58156719,-18896437]
void enviar_grandezas_medidas(){
  char medidas[27];

  medidas[0] = '[';

  for(byte a = 1; a < 25; a++){
    medidas[a] = mensagem[a];
  }
  medidas[25] =  ']';
  medidas[26] =  '\0';

  Serial.print("Grandezas medidas: ");
  Serial.println(medidas);
  //client.publish("app/medidas", medidas);
}

void enviar_localizacao(){
  char loc[22];

  loc[0] = '[';

  for(byte a = 26; a < 45; a++){
    loc[a-25] = mensagem[a];
  }
  loc[20] =  ']';
  loc[21] =  '\0';

  
  Serial.print("Geolocalização medida: ");
  Serial.println(loc);
  
  //client.publish("app/loc", loc);
}

void salvar_SD() {
  /**
  //abre o arquivo para edição
  myFile = SD.open("dados.txt", FILE_WRITE);
  
  //grava o que foi digitado no arquivo
  myFile.println(mensagem);

  //fecha e salva o arquivo após edição
  myFile.close(); **/
}

void loop() {

  //if (!client.connected()) {
    //reconnect();
 // }
  
  while(ss.available()){
    char c = ss.read();

    if((index == 0 && c != '[') || (index == 26 && c == '0')){
      index = 0;
      continue;
    }
        
    mensagem[index] = c;
    index = index+1;
    
    //Fim da leitura da mensagem
    //índice deve ser zerado
    if(index == 46){

      mensagem[index] = '\0';
      
      Serial.print("Mensagem recebida: ");
      Serial.println(mensagem);
      
      index = 0;
      //salvar_SD();
      enviar_grandezas_medidas();
      enviar_localizacao();
    
      continue;
    } 
  }
 //   client.loop();
  delay(100);

}
