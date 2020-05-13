//alert("Olá mundo JavaScript!");
console.log("Escrevendo algo no console do navegador");
			
var titulo = document.querySelector("h1");
			
console.log(titulo);//imprime tudo HTML + CONTEÚDO
			
console.log(titulo.textContent);//imprime só o conteúdo
			
titulo.textContent = "Aparecida Nutrição SA";//modifica o conteúdo do h1

//---------------------------------------------------------

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	
	var paciente = pacientes[i];
	
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = true;
	var alturaEhValida = true;

	if(peso <= 0 || peso >= 1000) {
	console.log("Peso inválido");
	pesoEhValido = false;
	tdImc.textContent = "Peso inválido";
	}

	if (altura <= 0 || altura >= 3.00) {
	console.log("Altura inválida");
	alturaEhValida = false;
	tdImc.textContent = "Altura inválida";
	}

	if (alturaEhValida && pesoEhValido) {
	var imc = peso / (altura * altura);
	tdImc.textContent = imc.toFixed(2);
	}
	
}

