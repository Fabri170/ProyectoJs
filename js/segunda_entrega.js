// ----- Constructor de clases ----- //
class Travel {
    constructor(travel) {
        this.id = travel.id;
        this.nombre = travel.nombre;
        this.precio = travel.precio;
        this.cantidad = 1;
        this.precioTotal = travel.precio;
    }

    agregarUnidad() {
        this.cantidad++;
    }

    quitarUnidad() {
        this.cantidad--;
    }

    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
}


// Constantes y variables
const travels = [{
        id: 0,
        nombre: "España",
        descripcion: "7 dias en España",
        img: "/imagenes/1.jpg",
        precio: 880
    },
    {
        id: 1,
        nombre: "Francia",
        descripcion: "8 dias en Francia",
        img: "/imagenes/2.jpg",
        precio: 1100
    },
    {
        id: 2,
        nombre: "Turquia y Grecia",
        descripcion: "5 dias en Turquia y 6 en Grecia",
        img: "/imagenes/3.jpg",
        precio: 1500
    },
    {
        id: 3,
        nombre: "Vietnam",
        descripcion: "10 dias en Vietnam",
        img: "/imagenes/4.jpg",
        precio: 1300
    },
    {
        id: 4,
        nombre: "China",
        descripcion: "12 dias en china",
        img: "/imagenes/5.jpg",
        precio: 1200
    },
    {
        id: 5,
        nombre: "Cancun",
        descripcion: "7 dias en canun all in clusive",
        img: "/imagenes/6.jpg",
        precio: 1050
    },
    {
        id: 6,
        nombre: "Brasil",
        descripcion: "7 dias en Brasil",
        img: "/imagenes/7.jpg",
        precio: 1500
    },


];


let carrito;
// ----- Declaración de funciones ----- //

// ----- Chquear carrito en Storage ----- //

function chequearCarritoEnStorage() {
    let contenidoEnStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));
    console.log("contenido en chequear Carrito en ls ", contenidoEnStorage);

    if (contenidoEnStorage) {
        let array = [];
        for (let i = 0; i < contenidoEnStorage.length; i++) {
            let travel = new Travel(contenidoEnStorage[i]);
            travel.actualizarPrecioTotal();
            array.push(travel);
        }

        return array;
    }
    return [];
}


// ----- Imprimir productos en el HTML ----- //
function imprimirProductosEnHTML(travels) {

    let cards = document.getElementById("cards");

    for (const travel of travels) {

        let card = document.createElement("div");

        card.innerHTML = `
        <div class="card text-center" style="width: 15rem; margin:1rem;">
            <img class="card-img-top" src="${travel.img}" alt="Card image cap">
    
             <div class="card-body">
                  <h4 class="card-title">${travel.nombre}</h4>
                  <div class="row">
                        <div class="col">
                           <p class="card-price btn btn-dark btn-block">$${travel.precio}</p>
                        </div>
                    <div class="row">
                        <button id="agregar${travel.id}" type="button" onclick="" class="addToCart btn btn-success btn-block fa fa-shopping-cart fa-2x"> Agregar </button>
                    </div>
                 </div>
             </div>
            </div>
        `;


        cards.appendChild(card);


        let boton = document.getElementById(`agregar${travel.id}`);


        boton.onclick = () => agregarAlCarrito(travel.id);

    }
}



// ----- Carrito ----- //
function dibujarTabla(array) {
    let contenedor = document.getElementById("carrito");
    contenedor.innerHTML = "";

    let precioTotal = obtenerPrecioTotal(array);

    let tabla = document.createElement("div");

    tabla.innerHTML = `
        <table id="tablaCarrito" class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Parcial</th>
                    <th scope="col">Accion</th>
                </tr>
            </thead>

            <tbody id="bodyTabla">
                <tr>
                    <td>Total: $${precioTotal}</td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
            <tr> 
                <td> <button id="vaciarCarrito" class="btn btn-dark"> Vaciar Carrito </button> </td>
            </tr>

            </tbody>
        </table>
    `;

    contenedor.appendChild(tabla);


    let bodyTabla = document.getElementById("bodyTabla");
    for (let travel of array) {
        let datos = document.createElement("div");
        datos.innerHTML = `
            <tr>
                <th scope="row"></th>
                <td>${travel.nombre}</td>
                <td>${travel.cantidad}</td>
                <td>$${travel.precioTotal}</td>
                <td><button id="eliminar${travel.id}" type="button" class="btn btn-dark">Eliminar</button></td>
            </tr>
      `;

        bodyTabla.appendChild(datos);

        $(`#eliminar${travel.id}`).on("click", () => {
            eliminarDelCarrito(travel.id);
        });
    }
}


function agregarAlCarrito(idProducto) {

    let travelEnCarrito = carrito.find((elemento) => {
        if (elemento.id == idProducto) {
            return true;
        }
    });

    if (travelEnCarrito) {

        let index = carrito.findIndex((elemento) => {
            if (elemento.id === travelEnCarrito.id) {
                return true;
            }
        });

        carrito[index].agregarUnidad();
        carrito[index].actualizarPrecioTotal();
    } else {

        carrito.push(new Travel(travels[idProducto], 1));
    }

    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
    dibujarTabla(carrito);
}

function eliminarDelCarrito(id) {
    let travel = carrito.find((travel) => travel.id === id);

    let index = carrito.findIndex((element) => {
        if (element.id === travel.id) {
            return true;
        }
    });

    if (travel.cantidad > 1) {

        carrito[index].quitarUnidad();
        carrito[index].actualizarPrecioTotal();
    } else {

        carrito.splice(index, 1);

        if (carrito.lenght === 0) {
            carrito = [];
        }
    }

    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
    dibujarTabla(carrito);
}


// ----- Precio Total ----- //
function obtenerPrecioTotal(array) {
    let precioTotal = 0;

    for (const producto of array) {
        precioTotal += producto.precioTotal;

    }

    return precioTotal;



}

// --- Invocación de funciones ---//
imprimirProductosEnHTML(travels);
carrito = chequearCarritoEnStorage();
dibujarTabla(carrito);