var data = {
		disciplina_1_1: {
			"id" : 1,
			"cor":"red",
			"periodo": 1,
			"titulo": "Mecânica Geral",
			"pre_requisitos": [],
			"requisito_de" : [10, 16, 26],
			"co_requisito" : [6]
		},
		disciplina_2_1: {
			"id" : 2,
			"cor":"red",
			"periodo": 1,
			"titulo": "Geometria Analítica",
			"pre_requisitos" : [],
			"requisito_de": [8, 10],
			"co_requisito" : []
		},
		disciplina_3_1: {
			"id": 3,
			"cor":"red",
			"periodo": 1,
			"titulo": "Introdução à Engenharia Mecânica",
			"pre_requisitos" : [],
			"requisito_de": [19],
			"co_requisito" : []
		},
		disciplina_4_1: {
			"id" : 4,
			"cor":"red",
			"periodo": 1,
			"titulo" : "Desenho Técnico para a Engenharia",
			"pre_requisitos" : [],
			"requisito_de": [14],
			"co_requisito" : []	
		},
		disciplina_5_1: {
			"id": 5,
			"cor":"red",
			"periodo": 1,
			"titulo" : "Cálculo Diferencial e Integral",
			"pre_requisitos" : [],
			"requisito_de": [8, 9, 10],
			"co_requisito" : [] 
		},
		disciplina_6_1: {
			"id": 6,
			"cor":"red",
			"periodo": 1,
			"titulo": "Mecânica Geral Experimental",
			"pre_requisitos" : [],
			"requisito_de": [11, 17],
			"co_requisito" : [1]
		},
		//================  PRIMEIRO ================================

		disciplina_1_2: {
			"id": 7,
			"cor": "blue",
			"periodo": 2,
			"titulo" : "Algebra Linear",
			"pre_requisitos" : [],
			"requisito_de": [28, 30],
			"co_requisito" : []

		},

		disciplina_2_2: {
			"id": 8,
			"cor": "blue",
			"periodo": 2,
			"titulo" : "Cálculo de Funções de Várias Variáveis",
			"pre_requisitos" : [2, 5],
			"requisito_de": [15, 16, 30],
			"co_requisito" : []

		},

		disciplina_3_2: {
			"id": 9,
			"cor": "blue",
			"periodo": 2,
			"titulo" : "Estatística e Probabilidade", 
			"pre_requisitos" : [5],
			"requisito_de": [],
			"co_requisito" : []
		},

		disciplina_4_2: {
			"id": 10,
			"cor": "blue",
			"periodo": 2,
			"titulo" : "Fluidos, Ondas e Física Térmica",
			"pre_requisitos" : [1, 2, 5],
			"requisito_de": [25],
			"co_requisito" : [11]

		},
		disciplina_5_2: {
			"id": 11,
			"cor": "blue",
			"periodo": 2,
			"titulo" : "Fluidos, Ondas e Física Térmica Experimental",
			"pre_requisitos" : [6],
			"requisito_de": [],
			"co_requisito" : [10]

		},

		disciplina_6_2: {
			"id": 12,
			"cor": "blue",
			"periodo": 2,
			"titulo" : "Química",
			"pre_requisitos" : [],
			"requisito_de": [23],
			"co_requisito" : [13]

		},
		disciplina_7_2: {
			"id": 13,
			"cor": "blue",
			"periodo": 2,
			"titulo" : "Química Experimental",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : [12]

		},

		disciplina_8_2: {
			"id": 14,
			"cor": "blue",
			"periodo": 2,
			"titulo" : "Desenho de Projetos Mecânicos",
			"pre_requisitos" : [4],
			"requisito_de": [31],
			"co_requisito" : []

		},

		//=====================================Segundo ===========================================

		disciplina_1_3: {
			"id": 15,
			"cor": "green",
			"periodo": 3,
			"titulo" : "Equações Diferenciais Ordinárias",
			"pre_requisitos" : [8],
			"requisito_de": [24, 25, 28, 30],
			"co_requisito" : []

		},

		disciplina_2_3: {
			"id": 16,
			"cor": "green",
			"periodo": 3,
			"titulo" : "Eletromagnetismo",
			"pre_requisitos" : [1, 8],
			"requisito_de": [36],
			"co_requisito" : [17]

		},

		disciplina_3_3: {
			"id": 17,
			"cor": "green",
			"periodo": 3,
			"titulo" : "Eletromagnetismo Experimental",
			"pre_requisitos" : [6],
			"requisito_de": [],
			"co_requisito" : [16]

		},

		disciplina_4_3: {
			"id": 18,
			"cor": "green",
			"periodo": 3,
			"titulo" : "Algoritmos e Técnicas de Programação",
			"pre_requisitos" : [],
			"requisito_de": [21],
			"co_requisito" : []

		},

		disciplina_5_3: {
			"id": 19,
			"cor": "green",
			"periodo": 3,
			"titulo" : "Metodologia Científica e Metodológica",
			"pre_requisitos" : [3],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_6_3: {
			"id": 20,
			"cor": "green",
			"periodo": 3,
			"titulo" : "Introdução à Engenharia de Fabricação",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []
		},

		//==================================  Terceiro ====================================
	

		disciplina_1_4: {
			"id": 21,
			"cor": "orange",
			"periodo": 4,
			"titulo" : "Cálculo Numérico",
			"pre_requisitos" : [18],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_2_4: {
			"id": 22,
			"cor": "orange",
			"periodo": 4,
			"titulo" : "Engenharia e Meio Ambiente",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_3_4: {
			"id": 23,
			"cor":"orange",
			"periodo": 4,
			"titulo" : "Introdução à Ciências dos Materiais",
			"pre_requisitos" : [12],
			"requisito_de": [29],
			"co_requisito" : []

		},

		disciplina_4_4: {
			"id": 24,
			"cor": "orange",
			"periodo": 4,
			"titulo" : "Métodos Matemáticos",
			"pre_requisitos" : [15],
			"requisito_de": [43],
			"co_requisito" : []

		},

		disciplina_5_4: {
			"id": 25,
			"cor": "orange",
			"periodo": 4,
			"titulo" : "Termodinâmica",
			"pre_requisitos" : [10, 15],
			"requisito_de": [32, 34],
			"co_requisito" : []

		},

		disciplina_6_4: {
			"id": 26,
			"cor": "orange",
			"periodo": 4,
			"titulo" : "Estática",
			"pre_requisitos" : [1],
			"requisito_de": [28, 30],
			"co_requisito" : []

		},

		// =============================================== Quarto


		disciplina_1_5: {
			"id": 27,
			"cor": "cyan",
			"periodo": 5,
			"titulo" : "Direito, Ética e Cidadania",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_2_5: {
			"id": 28,
			"cor": "cyan",
			"periodo": 5,
			"titulo" : "Dinâmica",
			"pre_requisitos" : [7, 15, 26],
			"requisito_de": [37],
			"co_requisito" : []

		},

		disciplina_3_5: {
			"id": 29,
			"cor": "cyan",
			"periodo": 5,
			"titulo" : "Engenharia dos Materiais Metálicos",
			"pre_requisitos" : [23],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_4_5: {
			"id": 30,
			"cor": "cyan",
			"periodo": 5,
			"titulo" : "Mecânica dos Sólidos I",
			"pre_requisitos" : [7, 8, 26],
			"requisito_de": [35],
			"co_requisito" : []

		},

		disciplina_5_5: {
			"id": 31,
			"cor": "cyan",
			"periodo": 5,
			"titulo" : "Metrologia Industrial",
			"pre_requisitos" : [14],
			"requisito_de": [41],
			"co_requisito" : []

		},

		disciplina_6_5: {
			"id": 32,
			"cor": "cyan",
			"periodo": 5,
			"titulo" : "Mecânica dos Fluidos I",
			"pre_requisitos" : [25],
			"requisito_de": [43],
			"co_requisito" : []

		},


		// ============================================   Quinto

		disciplina_1_6: {
			"id": 33,
			"cor": "purple",
			"periodo": 6,
			"titulo" : "Economia",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_2_6: {
			"id": 34,
			"cor": "purple",
			"periodo": 6,
			"titulo" : "Máquinas Térmicas",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_3_6: {
			"id": 35,
			"cor": "purple",
			"periodo": 6,
			"titulo" : "Mecânica dos Sólidos II",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_4_6: {
			"id": 36,
			"cor": "purple",
			"periodo": 6,
			"titulo" : "Eletricidade Aplicada",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_5_6: {
			"id": 37,
			"cor": "purple",
			"periodo": 6,
			"titulo" : "Vibrações de Sistemas Mecânicos",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_6_6: {
			"id": 38,
			"cor": "purple",
			"periodo": 6,
			"titulo" : "Energias Renováveis",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_7_6: {
			"id": 39,
			"cor": "purple",
			"periodo": 6,
			"titulo" : "Projeto Integrador",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		// ==============================================  SEXTO

		disciplina_1_7: {
			"id": 40,
			"cor": "#E30B5C",
			"periodo": 7,
			"titulo" : "Teoria Geral da Administração",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_2_7: {
			"id": 41,
			"cor": "#E30B5C",
			"periodo": 7,
			"titulo" : "Manutenção Mecânica",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []
		},
		
		disciplina_3_7: {
			"id": 42,
			"cor": "#E30B5C",
			"periodo": 7,
			"titulo" : "Elementos de Máquinas I",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_4_7: {
			"id": 43,
			"cor": "#E30B5C",
			"periodo": 7,
			"titulo" : "Transferência de Calor e Massa",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},


		//================================= Sétimo

		disciplina_1_8: {
			"id": 44,
			"cor": "#003153",
			"periodo": 8,
			"titulo" : "Segurança e Higiene no Trabalho",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_2_8: {
			"id": 45,
			"cor": "#003153",
			"periodo": 8,
			"titulo" : "Elementos de Máquinas II",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_3_8: {
			"id": 46,
			"cor": "#003153",
			"periodo": 8,
			"titulo" : "Projeto de Máquinas",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},


		//========================================== Oitavo

		disciplina_1_9: {
			"id": 47,
			"cor": "violet",
			"periodo": 9,
			"titulo" : "Projeto Final de Curso I",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []

		},

		disciplina_2_9: {
			"id": 48,
			"cor": "violet",
			"periodo": 9,
			"titulo" : "Estágio Obrigatório (200h)",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []
		},

		//======================================  Nono

		disciplina_1_10: {
			"id": 49,
			"cor": "black",
			"periodo": 10,
			"titulo" : "Projeto Final de Curso II",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []
		},

		disciplina_2_10: {
			"id": 50,
			"cor": "black",
			"periodo": 9,
			"titulo" : "Atividade Complementares (50h)",
			"pre_requisitos" : [],
			"requisito_de": [],
			"co_requisito" : []
		}

}