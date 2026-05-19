let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(nombre, precio){

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert(nombre + " agregado al carrito");

}

function mostrarCarrito(){

    let contenedor =
    document.getElementById("carrito-items");

    if(!contenedor){
        return;
    }

    let total = 0;

    contenedor.innerHTML = "";

    carrito.forEach(producto => {

        contenedor.innerHTML += `
            <div class="item-carrito">
                <h3>${producto.nombre}</h3>
                <p>Q ${producto.precio}</p>
            </div>
        `;

        total += producto.precio;

    });

    document.getElementById("total")
    .innerText = "Total: Q " + total;

}

function confirmarCompra(){

    document.getElementById("formularioCompra")
    .classList.add("oculto");

    document.getElementById("mensaje")
    .classList.remove("oculto");

    localStorage.removeItem("carrito");

}

function cambiarModo(){

    document.body.classList.toggle("oscuro");

}