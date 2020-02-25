var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    paciente.addEventListener("dblclick", function() {
        console.log("fui clicado com um duplo click!");
        this.remove();
    });
});