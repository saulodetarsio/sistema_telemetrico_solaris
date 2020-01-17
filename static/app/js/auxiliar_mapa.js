$(document).ready(function() {
    var controleMapa = new ControleMapa();
  
    /**
    *   Valores que indicam o local que será renderizado no centro do elemento HTML.        
    **/
    var centro_mapa = [-26.254933, -48.707542]


    /***
    *   O valor máximo de zoom do mapa.
    **/
    var zoom_maximo = 15;
    

    /**
    *   O valor mínimo de zoom do mapa.
    **/
    var zoom_minimo =  12;


    /** 
    * O valor inicial de zoom que o mapa será renderizados
    **/
    var zoom_inicial = 12;


    /**
    * A forma de exbição de mapa. Satélite, Híbridos, ruas, etc
    **/
//var fonte_mapa = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"

//var fonte_mapa = "../img/mapa/{z}/{x}/{y}.png"

var fonte_mapa = '/static/app/img/mapa/{z}/{x}/{y}.jpg';

controleMapa.criar_mapa("mapa", centro_mapa, zoom_inicial)

var boias = []

$.ajax({
    method: 'GET',
    url: 'boias',
        
    success:function(responseData){
        for(var i = 0;  i < responseData.length; i++){
            var latitude = parseFloat(responseData[i][0])
            var longitude = parseFloat(responseData[i][1])
            boias.push([latitude, longitude])
           controleMapa.renderizar_boia([latitude, longitude]);

        }

        if(boias.length > 0)
            controleMapa.renderizar_circuito_prova(boias)
    }
})

    controleMapa.renderizar_mapa(fonte_mapa, zoom_minimo, zoom_maximo)
    controleMapa.adicionar_marcador_barco([-26.252932, -48.68042]);
       
    var appSocket = new WebSocket("ws://"+ window.location.host +"/ws/app/loc");
    //Recebendo informaçoes da medidas na página
    appSocket.onmessage = function(e) {
      var data = JSON.parse(e.data);
      var message = data['message'];
      

      var m = message.substr(3, 19);
      
      var t = m.split(",")
      var lat = t[0].toString()
      var lng = t[1].toString()   

      var n_la = lat.slice(0, 3)+"."+lat.slice(3, 9)   
      var n_lo = lng.slice(0, 3)+"."+lng.slice(3, 9)   


       controleMapa.atualizar_localizacao_barco([n_la, n_lo])
    }
    

})
