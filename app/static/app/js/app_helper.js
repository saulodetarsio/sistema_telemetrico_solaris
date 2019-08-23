$(document).ready(function() {


    var controleMapa = new ControleMapa();
    
    /**
    *   Valores que indicam o local que será renderizado no centro do elemento HTML.

        IFF = [-22.814806, -41.981462];

        PRAIA = [-22.761624, -41.919103]
    
        PRAIA2 = [-22.753329, -41.886513]
        LAGOA IATE CLUBE [-27.610148, -48.481733]
        
    **/
    var centro_mapa = [-22.753036, -41.8922]


    /***
    *   O valor máximo de zoom do mapa.
    **/
    var zoom_maximo = 19;
    

    /**
    *   O valor mínimo de zoom do mapa.
    **/
    var zoom_minimo =  13;


    /** 
    * O valor inicial de zoom que o mapa será renderizados
    **/
    var zoom_inicial = 15;

    

    /**
    * Localizações para movimentar o barco automaticamente
    **/
    var percurso_fake_helmuth = [
        [-22.753352, -41.887779],
        [-22.749515, -41.894774],
        [-22.753194, -41.894989],
        [-22.753352, -41.887779]
    ];


    /**
    * A forma de exbição de mapa. Satélite, Híbridos, ruas, etc
    **/
var fonte_mapa = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"


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

    /***
    var boias = {
    boia1 : [-22.750063, -41.895075],
    boia2 : [-22.748124, -41.891599],
    boia3 : [-22.750934, -41.887221],
    boia4 : [-22.753388, -41.891772]
   } **/
   
    controleMapa.renderizar_mapa(fonte_mapa, zoom_minimo, zoom_maximo)

})