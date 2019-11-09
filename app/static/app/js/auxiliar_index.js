$(document).ready(function() {
  var appSocket = new WebSocket("ws://"+ window.location.host +"/ws/app/medidas");
  //Recebendo informaçoes da medidas na página
  appSocket.onmessage = function(e) {
      var data = JSON.parse(e.data);
      var message = data['message'];

      
      var tam_message = message.length
      var pure = message.substr(2,24)
    
      var medidas = pure.split(',')

      console.log(medidas)
      

      var bateria_principal = document.getElementById('bateria_principal')
      bateria_principal.textContent = medidas[0] + " V"

      var baterias_auxiliares = document.getElementById('baterias_auxiliares')
      baterias_auxiliares.textContent = medidas[1] + " V"

      var placas_solares = document.getElementById('placas_solares')
      placas_solares.textContent = medidas[2] + " V"
      
      var corrente_motor = document.getElementById('corrente_motor')
      corrente_motor.textContent = medidas[3] + " A"

      var velocidade_barco = document.getElementById('velocidade_barco')
      velocidade_barco.textContent = medidas[4] + " nós"  
  }
}