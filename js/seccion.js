/*function Auto(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
}


let auto1 = new Auto("Fabricio, Molina, 23, Danton 620");

let nombre = prompt("Ingrese su nombre");

let apellido = prompt("Ingrese su edad");

let edad = prompt("Ingrese su nombre");

let domicilio = prompt("Ingrese su nombre");

let auto2 = new Auto(nombre, apellido, edad, domicilio)*/
/*function Auto(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
}


let auto1 = new Auto("Fabricio, Molina, 23, Danton 620");

let nombre = prompt("Ingrese su nombre");

let apellido = prompt("Ingrese su apellido");

let edad = prompt("Ingrese su edad");

let domicilio = prompt("Ingrese su domicilio");

let auto2 = new Auto(nombre, apellido, edad, domicilio)*/


/*
//funciones
//Declaración de variable para guardar el resultado de la suma
alert(resultado) = 0;
//Funcion que suma dos numeros y asigna un resultado
function sumar(primerNumero, sedundoNumero) {
    return primerNumero + sedundoNumero
}
//Funcion que muestra resultado por consola 
function mostrar(mensaje) {
    console.log(mensaje)
}

//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);
mostrar(resultado);
*/


//clase funciones
/*
//calculadora
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;

    }
}

function pedir__y_validar() {
    let nro1 = parseInt(prompt("Ingrese un numero"));
    let nro2 = parseInt(prompt("Ingrese un numero"));
    let operacion = prompt("Ingrese operación +, -, * o /");
}

if (isNaN(primerNumero) || (isNaN(segundoNumero)) || operacion == "") {
    alert("Ingresaste mal los datos");
} else {
    let resultado = calculadora(nro1, nro2, operacion);
    alert("El resultado de la operación es:" + resultado);
}


//funcion doble
/*
function double(x) {
    return x * 2;
}
let double2 = function(x) {
    return x * 2;
}
*/
/*
//función saber mes
function saberMes(mes) {
    switch (mes) {
        case '1':
            return 'enero'
            break;
        case '2':
            return 'febrero'
            break;
        case '3':
            return 'marzo'
            break;
        case '5':
            return 'mayo'
            break;
        case '6':
            return 'junio'
            break;
        case '7':
            return 'julio'
            break;
        case '8':
            return 'agosto'
            break;
        case '9':
            return 'septiembre'
            break;
        case '10':
            return 'octubre'
            break;
        case '11':
            return 'noviembre'
            break;
        case '12':
            return 'diciembre'
            break;
        default:
            console.log('ingresar algo valido');
            break;


    }

}
let miMes = saberMes('2')
console.log(miMes)


//Arrays

//Decalaración de array vacío y variable para determinar cantidad

const listaLugares = [];
let cantidad = 4;


//empleo do... while para cargar nombre en el array por prompt()

do {
    let entrada = prompt("Ingresa destino");
    listaLugares.push(entrada.toUpperCase());
    console.log(listaLugares.length);

} while (listaLugares.length != cantidad)

//concatenar array de dos elementos
const nuevaLista = listaLugares.concat(["Acepta para confirmar destinos"]);

//salida con salto de línea usando join
alert(nuevaLista.join("\n"))


// push, pop, shift, unshift

let lista_compras = new Array("lechuga", "tomates", "carne", "pollo");
console.log(lista_compras);

lista_compras.push("pollo")
console.log(lista_compras)

lista_compras.pop()
console.log(lista_compras)

lista_compras.shift()
console.log(lista_compras)

lista_compras.unshift("porotos")
console.log(lista_compras)



//arrays con objetos
const lugares = [{ id: 1, lugares: "Hawai" },
    { id: 2, lugares: "Madrid" },
    { id: 3, lugares: "Sevilla" }
];

for (const producto of lugares) {
    console.log(lugares.id)
    console.log(lugares.lugares)
}
*/
// ejemplo iva
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;

    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}


//array para almacenar objetos

/*const productos = [];
productos.push(new producto("Madrid", "1400 "));
productos.push(new producto("Noruega", "1800"));
productos.push(new producto("Suiza", "2000"));

//array con for...of para ser modificado a todos
for (const producto of productos)
    producto.sumaIva();*/

// ----- Contructor de clases ----- //
class Cake {
    constructor(viaje) {
        this.id = viaje.id;
        this.nombre = viaje.nombre;
        this.precio = viaje.precio;
        this.cantidad = 1;
        this.precioTotal = viaje.precio;
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

// ----- Variables ----- //
const cakes = [{
        id: 0,
        nombre: "España",
        descripcion: "7 dias en España",
        precio: 880,
    },
    {
        id: 1,
        nombre: "Francia",
        descripcion: "8 dias en Francia",
        precio: 1100,
    },
    {
        id: 2,
        nombre: "Turquia y Grecia",
        descripcion: "5 dias en Turquia y 6 en Grecia",
        precio: 1500,
    },
    {
        id: 3,
        nombre: "Vietnam",
        descripcion: "10 dias en Vietnam",
        precio: 1300,
    },
    {
        id: 4,
        nombre: "China",
        descripcion: "12 dias en china",
        precio: 1200,
    },
    {
        id: 5,
        nombre: "Cancun",
        descripcion: "7 dias en canun all in clusive",
        precio: 1050,
    },
    {
        id: 6,
        nombre: "Brasil",
        descripcion: "7 dias en Brasil",
        precio: 1500,
    },


];

let carrito = [];
let precioTotal;

// ----- Declaración de funciones ----- //
function menuDeCompras() {
    let stringProductos = "";

    for (let i = 0; i < cakes.length; i++) {
        stringProductos += `${cakes[i].id}: ${cakes[i].nombre}. Precio: $${cakes[i].precio} \n`;

    }

    let idProducto = prompt(`
    Escriba el número de paquete de viaje que desea comprar, o escriba 'terminar' para finalizar
    ${stringProductos} \n`);

    while (idProducto !== "terminar") {

        let cakeEnCarrito = carrito.find((elemento) => elemento.id == idProducto);

        if (cakeEnCarrito) {

            let index = carrito.findIndex((elemento) => elemento.id === cakeEnCarrito.id);

            carrito[index].agregarUnidad();
            carrito[index].actualizarPrecioTotal();
            alert(`
            Se ha añadido otra unidad ${carrito[index].nombre} 
            Unidades: ${carrito[index].cantidad}`);
            console.table(carrito);
        } else {

            carrito.push(new Cake(cakes[idProducto]));


            alert(`Se ha añadido al carrito ${cakes[idProducto].nombre}`);
            console.table(carrito);
        }

        idProducto = prompt(`
        Desea seguir comprando? 
        Escriba el número del producto a comprar, o escriba 'terminar' para finalizar 
        ${stringProductos}`);
    }
}



function calculadoraiva(precioProducto, impuestos) {
    const iva = 0.21
    const conDescuento = calculadoraiva(precioTotal, iva);
    if (precioProducto >= 2500) {

        return precioProducto - (precioProducto * impuestos)


    } else {

        return precioProducto

    }
}

function obtenerPrecioTotal() {
    let precioTotal = 0;
    for (const producto of carrito) {
        precioTotal += producto.precioTotal;
    }
    if (precioTotal >= 2500) {

        return conDescuento;

    } else {

        return precioTotal;

    }

}


menuDeCompras();
calculadoraiva()
precioTotal = obtenerPrecioTotal();
alert(`El precio total de tu compra es de $${precioTotal}
Gracias!`);
console.table(carrito);









cakes.sort((a, b) => a.precio - b.precio);
console.log("Array ordenado por precio ascendente");
console.table(cakes);

cakes.sort((a, b) => a.precio - b.precio);
console.log("Array ordenado por precio descendente");
console.table(cakes);


let nuevoArray = cakes.filter((elemento) => elemento.precio < 1500);
console.log("Nuevo array con precio menor a 1500");
console.table(nuevoArray);