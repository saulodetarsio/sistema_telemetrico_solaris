$(document).ready(function(){

	function get_disciplina_id(id){
		for(var a = 0;  a < Object.keys(data).length; a++){
			var disciplina = data[Object.keys(data)[a]] 

			if(disciplina.id == id){
				return disciplina;
			}
		}
		return 0;
	}


	for(var a = 0;  a < Object.keys(data).length; a++){
		var disciplina = data[Object.keys(data)[a]] 

		$("#opcoes").append($('<option>', {
    		value: disciplina.id,
    		text: disciplina.titulo
		}));
	}


	$("#buscar-infos").on("click", function(){
		var modal = $("#card")

		//Capturando os dados da disciplina escolhida
		var disciplina_id = $("#opcoes").val();
		var disciplina = get_disciplina_id(disciplina_id);
			


		var card = $("#card").css("background-color", disciplina.cor)
		var titulo_card = $("#exampleModalLongTitle").text(disciplina.titulo)

		var pre_requisitos = $(".pre_requisitos")
		pre_requisitos.empty()

		//Pré-requisitos
		if(disciplina.pre_requisitos.length == 0){
			var div1 = $("<div>Nenhum pré-requisito</div>")
			pre_requisitos.append(div1)
		}else{

			for(var a = 0; a < disciplina.pre_requisitos.length; a++){

				var d = get_disciplina_id(disciplina.pre_requisitos[a])

				var div1 = $("<div></div>")
				div1.css("display", "flex")
				div1.css("justify-content", "space-between")
				div1.css("align-items", "center")
				
				//Nome da disciplina
				var div_f1 = $("<div></div>")
				div_f1.text(d.titulo)

				//Periodo
				var div_f2 = $("<div></div>")
				div_f2.text(d.periodo)
				div_f2.css("background-color", d.cor)

				div_f2.css("height", "25px")
				div_f2.css("width", "25px")
				div_f2.css("border-radius", "50%")
				div_f2.css("color", "white")
				div_f2.css("display", "flex")
				div_f2.css("justify-content", "center")
				div_f2.css("margin", "5px")

				div1.append(div_f1)
				div1.append(div_f2)

				pre_requisitos.append(div1)

			}
		}	

		var requisito_de = $(".requisito_de")
		requisito_de.empty();

		//Requisito de 
		if(disciplina.requisito_de.length == 0){
			var div1 = $("<div>Não é pré-requisito de disciplinas</div>")
			requisito_de.append(div1)
		}else{
			for(var a = 0; a < disciplina.requisito_de.length; a++){

				var d = get_disciplina_id(disciplina.requisito_de[a])

				var div1 = $("<div></div>")
				div1.css("display", "flex")
				div1.css("justify-content", "space-between")
				div1.css("align-items", "center")
				
				//Nome da disciplina
				var div_f1 = $("<div></div>")
				div_f1.text(d.titulo)

				//Periodo
				var div_f2 = $("<div></div>")
				div_f2.text(d.periodo)
				div_f2.css("background-color", d.cor)

				div_f2.css("height", "25px")
				div_f2.css("width", "25px")
				div_f2.css("border-radius", "50%")
				div_f2.css("color", "white")
				div_f2.css("display", "flex")
				div_f2.css("justify-content", "center")
				div_f2.css("margin", "5px")

				div1.append(div_f1)
				div1.append(div_f2)

				requisito_de.append(div1)

			}
		}

		var co_requisito = $(".co_requisito")
		co_requisito.empty()

		//Requisito de 
		if(disciplina.co_requisito.length == 0){
			var div1 = $("<div>Não apresenta co-requisito</div>")
			co_requisito.append(div1)
		}else{
			for(var a = 0; a < disciplina.co_requisito.length; a++){


				var d = get_disciplina_id(disciplina.co_requisito[a])

				console.log(d)

				var div1 = $("<div></div>")
				div1.css("display", "flex")
				div1.css("justify-content", "space-between")
				div1.css("align-items", "center")
				
				//Nome da disciplina
				var div_f1 = $("<div></div>")
				div_f1.text(d.titulo)

				//Periodo
				var div_f2 = $("<div></div>")
				div_f2.text(d.periodo)
				div_f2.css("background-color", d.cor)

				div_f2.css("height", "25px")
				div_f2.css("width", "25px")
				div_f2.css("border-radius", "50%")
				div_f2.css("color", "white")
				div_f2.css("display", "flex")
				div_f2.css("justify-content", "center")
				div_f2.css("margin", "5px")

				div1.append(div_f1)
				div1.append(div_f2)

				co_requisito.append(div1)

			}
		}

	})

})