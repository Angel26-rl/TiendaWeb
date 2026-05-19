let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

actualizarContador();

function agregarCarrito(nombre, precio){

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContador();

    alert(nombre + " agregado al carrito");

}

function actualizarContador(){

    let contador =
    document.getElementById("contador-carrito");

    if(contador){

        contador.innerText =
        "🛒 Carrito (" + carrito.length + ")";

    }

}

function mostrarCarrito(){

    let contenedor =
    document.getElementById("carrito-items");

    if(!contenedor){
        return;
    }

    let total = 0;

    contenedor.innerHTML = "";

    carrito.forEach((producto, index) => {

        contenedor.innerHTML += `
            <div class="item-carrito">

                <h3>${producto.nombre}</h3>

                <p>Q ${producto.precio}</p>

                <button onclick="eliminarProducto(${index})">
                    Eliminar
                </button>

            </div>
        `;

        total += producto.precio;

    });

    document.getElementById("total")
    .innerText = "Total: Q " + total;

}

function eliminarProducto(index){

    carrito.splice(index, 1);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    mostrarCarrito();

    actualizarContador();

}

function confirmarCompra(){

    document.getElementById("formularioCompra")
    .classList.add("oculto");

    document.getElementById("mensaje")
    .classList.remove("oculto");

    localStorage.removeItem("carrito");

    carrito = [];

    actualizarContador();

}

function cambiarModo(){

    document.body.classList.toggle("oscuro");

}