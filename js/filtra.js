var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        pacientes.forEach(paciente => {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            (nome != this.value) ? paciente.classList.add("invisivel") : paciente.classList.remove("invisivel");
        });
    } else {
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel");
        });
    }
});