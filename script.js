let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

actualizarContador();

function agregarCarrito(nombre, precio, imagen){

    carrito.push({
        nombre: nombre,
        precio: precio,
        imagen: imagen
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

                <img src="${producto.imagen}"
                class="imagen-carrito">

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

    document.getElementById("total")
    .innerText = "Total: Q " + total;



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

    let nombre =
    document.getElementById("nombreCliente").value;

    let direccion =
    document.getElementById("direccionCliente").value;

    let facturaHTML = "";

    let total = 0;

    carrito.forEach(producto => {

        facturaHTML += `
            <p>
                ${producto.nombre}
                ........
                Q ${producto.precio}
            </p>
        `;

        total += producto.precio;

    });

    let fecha =
    new Date().toLocaleDateString();

    document.getElementById("factura")
    .innerHTML = `

        <div class="factura-box">

            <h2>
                TECHLIFE STORE
            </h2>

            <p>
                -------------------------
            </p>

            <p>
                Cliente:
                ${nombre}
            </p>

            <p>
                Dirección:
                ${direccion}
            </p>

            <p>
                Fecha:
                ${fecha}
            </p>

            <p>
                -------------------------
            </p>

            ${facturaHTML}

            <p>
                -------------------------
            </p>

            <h3>
                TOTAL: Q ${total}
            </h3>

            <p>
                ¡Gracias por su compra!
            </p>

        </div>

    `;

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