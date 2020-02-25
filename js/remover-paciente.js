var pacientes = document.querySelectorAll(".pacieente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", (event) => {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.remove();
});