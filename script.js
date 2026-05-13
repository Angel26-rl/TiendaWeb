function mostrarFormulario(){

    document.getElementById("formularioCompra")
    .classList.remove("oculto");

}

function confirmarCompra(){

    document.getElementById("formularioCompra")
    .classList.add("oculto");

    document.getElementById("mensaje")
    .classList.remove("oculto");

} 


