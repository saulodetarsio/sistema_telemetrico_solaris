//carregar este scketch na porta COM 13
#include<SoftwareSerial.h>

SoftwareSerial ss(8,9);

String pacote_dados = "";

String latitudes[12] {"-22.753784", "-22.752992", "-22.751844", "-22.750499", "-22.749668", "-22.749074", "-22.748520", "-22.749589", "-22.750459", "-22.751172", "-22.752082", "-22.752953"};
String longitudes[12] = {"-41.890097", "-41.891952", "-41.893358", "-41.894388", "-41.893101", "-41.892242", "-41.891599", "-41.890740", "-41.890097", "-41.889367", "-41.888766", "-41.888294"};

char indice_coord = 0;

char gerar_digito_aleatorio(){
  char randNumber = random(0, 10);
  
  randNumber+=48;
  return randNumber;
}

String gerar_grandeza_medida(){
  String parcela = "";
  parcela.concat(gerar_digito_aleatorio());
  parcela.concat(gerar_digito_aleatorio());
  parcela.concat(".");
  parcela.concat(gerar_digito_aleatorio());
  delay(50);
  return parcela;
}

String gerar_localizacao(){
  String parcela = "";
  parcela.concat("-");
  parcela.concat(gerar_digito_aleatorio());
  parcela.concat(gerar_digito_aleatorio());
  parcela.concat(".");
  for(char a=0; a < 6; a++){
    parcela.concat(gerar_digito_aleatorio());
  }
  delay(50);
  return parcela;
}

void setup() {
  randomSeed(analogRead(0));
  Serial.begin(9600);
  ss.begin(38400);  
}

void loop() {
  //Montando o pacote a ser enviado para o arduino conectado à rede
  pacote_dados.concat("[");
  for(char a = 0; a < 5; a++){
    pacote_dados.concat(gerar_grandeza_medida());
    pacote_dados.concat(",");
  }
  pacote_dados.concat(latitudes[indice_coord]);
  pacote_dados.concat(",");
  pacote_dados.concat(longitudes[indice_coord]);
  pacote_dados.concat("]");

  indice_coord =  indice_coord+1;

   if(indice_coord == 12){
      indice_coord = 0;
   }
  
  //Enviando pacote via comunicação serial
  ss.println(pacote_dados);
  Serial.println(pacote_dados);
  //Limpando a string
  pacote_dados = "";
  delay(100);
}
