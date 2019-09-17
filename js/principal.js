var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValida = true;

var tdImc = paciente.querySelector(".info-imc");

if ((peso <= 0) || (peso >= 1000)) {
    console.log("Peso invalido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if ((altura <= 0) || (altura >= 1000)) {
    console.log("Altura invalida");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (pesoEhValido && alturaEhValida)  {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}