// ejercicio 1
function cualEsMayor(a, b) {
    // if (a > b) {
    //     return a;
    // } else {
    //     return b;
    // }
    return (a > b ? a + " es mayor" : b + " es mayor");
    // forma más facil de hacer lo mismo 
    // con menos codigo concatenando además un texto descriptivos
}
let mayor = cualEsMayor(10, 5);
console.log(cualEsMayor, mayor);
// resuelto



// ejercicio 2
/*PARAMETROS

8K 7680 X 4320
4K 3840 X 2160
WQHD 2560 X 1440
FHD 1920 X 1080
HD 1280 X 720
*/

// let Nombre = {
//     nm: "8K",
//     al: 7680,
//     an: 4320,    //con for..in
// }
//intento con for in, FALLIDO

function nombreResolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return "resolución: 8K";
    } else if (ancho >= 3840 && alto >= 2160) {
        return "resolución: 4k";
    } else if (ancho >= 2560 && alto >= 1440) {
        return "resolución: WQHD";
    } else if (ancho >= 1920 && alto >= 1080) {
        return "resolución: FHD"
    } else if (ancho >= 1280 && alto >= 720) {
        return "resolución: HD"
    } else {
        return "Sin Coincidencias"
    }

}

let nombre = nombreResolucion(1920, 1091)
console.log(nombreResolucion, nombre)
// resuelto

// ejercicio 3

function getbyIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return "No existe el elemento";
    }
    return arr[idx]
}

let resultado = getbyIdx([4, 8], 0);    //me dice que el indice 0 es numero 4
console.log(getbyIdx, resultado + " indice");

// ejercicio 4
// imprimir impares hasta el 9

let i = 0;

while (i < 10) {
    i++;
    if (i % 2 == 0) {
        continue;
    }
    console.log(i, "es impar")
}

//ejercicio 5
let numerosAComparar = [2, 5, 5, 70, -5, -100, -155];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for (numero of arr) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return ["numero menor:", menor, "numero mayor:", mayor]
}

let numeros = getMenorMayor(numerosAComparar)
console.log(numeros);

// practica mia 

// let busquedaProductos = ["Collar de colores", "Pulsera con ojo", "collar con carita","pulsera roja y blanca", "pulsera roja"];

// function buscador(prod) {
//     let prodBusc = prod[""];
//     for (param of prod) {
//         param = param == prodBusc ? param : prodBusc
//     }
//     return["resultado", param]
// }
// let prodBusc = busqueda(busquedaProductos)
// console.log(prodBusc);

// ejercicio que se utiliza en pruebas tecnicas

// ejercicio 6
// let array = [2, 5, 7, 15, -5, -100, 55];

// function cuantosPositivos(arr)  {
//     let conteo = 0;
//     for (elemento of arr)   {
//         if (elemento >= 0)  {
//             conteo++;
//         }
//     }
//     return conteo;
// }
// let resultadox = cuantosPositivos(array);
// console.log(resultadox, "Numeros son positivos");



// ejercicio 7 
// crear una calculadora de impuestos :D

function precioCompleto(precio, impuesto) {
    return precio + precio * impuesto;
}
let resultado1 = precioCompleto(19.90, 0.15);
console.log(resultado1, "precio más impuesto");

// ejercicio 8 
// crear algoritmo que tome un array de objetos y devuelva un array de pares

let idNombre = [{
    id: 1,
    name: "Javier",
}, {
    id: 2,
    name: "Carlos",
}, {
    id: 3,
    name: "Carmen",
}];

let pares = [
    [1, { id: 1, name: "Javier" }],
    [2, { id: 2, name: "Carlos" }],
    [3, { id: 3, name: "Carmen" }],
];
// esta funcion tiene que imprimir exactamente lo que está en la variable pares
// pero todo hecho a través de codigo

function toPairs(arr1) {
    let pairs = [];      //se declara la variable que contendrá los pares y estará vacía para luego iterar los elementos del arreglo
    for (idx1 in arr1) {          //idx para indicar el indice y arr para indicar el arreglo
        let elemento1 = arr1[idx1]         //acá se accede al elemento del arreglo, devuelve el elemento que se itera
        pairs[idx1] = [elemento1.id, elemento1];       //se le pasa el id del elmento y luego el elemento completo
    }
    return pairs;   //retorna el arreglo que se hizo con los pares
}

let resultado2 = toPairs(idNombre);
console.log(resultado2), "pairs";

// ejercicio 9
// crear un algoritmo que devuelva una array de objetos en base a pares, operación inversa a la de arriba
let pairs1 = [
    [1, { name: "Carlos" }],
    [2, { name: "Juan" }],
    [3, { name: "Pepe" }],
];

let array = [{
    id: 1,
    name: "Carlos",
}, {
    id: 2,
    name: "Juan",
}, {
    id: 3,
    name: "Pepe",
}];

function toCollection(arr3) {
    let collection = [];
    for (idx2 in arr3) {       //para acceder al indice
        let elemento2 = arr3[idx2];
        collection[idx2] = elemento2[1];    //agregar el elemento a collection
        collection[idx2].id = elemento2[0]  //accedemos al mismo elemento indicandole que con el id y declarando que sobre el indice 0
    }
    return collection;
}

let resultado3 = toCollection(pairs1);
console.log(resultado3);

// ejercicio 10
// crear un array de longitud N y que sus elementos sean numeros del 1 N

let longitud = 7;

function crearArray(na) {
    if (na <= 0) {
        return [];  //indica que en caso de que N sea igual o menor a 0 devuelva un array vacío
    }
    let arr5 = [];
    for (let ia = 0; ia < na; ia++) {//Bucle con for donde se declara i = 0, y que si i es menor que N, sume
        arr5[ia] = ia + 1;
    }
    return arr5;
};

let result = crearArray(longitud);
console.log(result);



// orientado a objetos
// definamos
let user = {
    email: "juan@gmail.com",
    name: "Juan",
    direccion: {
        calle: "calle 1",
        numero: 10,
    },
    activo: true,
    recuperarContraseña: function () {
        console.log("recuperando contraseña...");
    },
}

// el usuario es un objeto que contiene dentro de sí otro objeto,
//  y la función que contiene se denomina programación orientada a objetos (POO, OPP);

// DINAMISMO
const user1 = {
    id: 1
};      // se declaro una constante con una propiedad id

// para agregar una propiedad a un objeto, se utiliza el operador "."
user1.nombre = "Juan"; //sobre la constante se declaró una propiedad llamada nombre
user1.guardar = function () {  // se declara una función llamada guardar
    console.log("guardando...", user1.nombre); // se imprime el texto guardando y el nombre correspondiente a user1
}
user1.guardar();    // se ejecuta la función guardar
delete user1.nombre;    // se elimina la propiedad nombre
delete user1.guardar;   // se elimina la función guardar
console.log(user1);     // imprime el objeto user1 sin la propiedad nombre ni guardar que se eliminaron

// const user2 = Object.freeze({id: 1});       // se declara una constante con object.freeze que no permite que se cambien el objeto ni los valores de las propiedades
const user2 = Object.seal({ id: 1 });             // se declara una constante con object.seal que no permite que se cambien el objeto ni de las propiedades, pero permite que se agreguen nuevas propiedades y cambiar valores
user2.nombre = "Juan"    // se agrega una nueva propiedad llamada nombre
user2.id = 2;    //esta pieza de codigo no se ejecuta porque el objeto no permite cambiar el id, el object.freeze bloquea todo lo que no este en el objeto
console.log(user2);     // imprime el objeto user2 que pasa a valer 2 porque se le cambio el id con la declaracion de user2.id = 2

// FACTORY FUNCTIONS
// EN LUGAR DE CREAR OBJETOS GIGANTES PARA DEFINIR USUARIOS SE PUEDE HACER CON FACTORY FUNCTIONS
// let user1 = {
//     email: "juan@gmail.com",
//     name: "Juan", 
//     activo: true,
//     recuperarContraseña: function () {
//         console.log("recuperando contraseña...");
//     },

// }
// let user2 = {
//     email: "carlos@gmail.com",
//     name: "Carlos", 
//     activo: false,
//     recuperarContraseña: function () {
//         console.log("recuperando contraseña...");
//     },
// }

// EJEMPLO DE FACTORY FUNCTIONS
function crearUsuario(nombre, email) {
    return {
        nombre,
        email,
        activo: true,
        recuperarContraseña: function () {
            console.log("recuperando contraseña...");
        },
    };
}   
// con menos codigo se crean 3 objetos de distintos valores con solo una función
let user3 = crearUsuario("Carlos", "carlos@gmail.com");
let user4 = crearUsuario("Pepe", "pepe@gmail.com");
let user5 = crearUsuario("Ana", "ana@gmail.com");

console.log(user3, user4, user5);



// CONTRUCTOR FUNCTIONS
function Usuario() {
    this.id = 1;
    this.recuperarContraseña = function () {
        console.log("recuperando contraseña...");
    };
}
let usuario1 = new Usuario();
// la palabra new crea un nuevo objeto vacio y lo asigna a this y si eso no retorna nada se retorna "this" undefined

console.log(usuario1);

// ATAJOS CONSTRUCTORES
// se pueden crear nuevos objetos el constructor Object();
// existen más constructores que se pueden usar
/*
new Array();    []
new Boolean();  true, false
new Number();   10
new String();   "" `` ''  

dependiendo de como se declare, con codigo nativo o a traves una funcion constructora, el codigo puede tener distintos comportamientos
un string puede ejecutarse como una funcion o mantener su propiedad dependiendo de como se declare en el constructor,
existen codigos que deconstruyen para que no tengan comportamientos extraños, son validos de usar pero si se declaran para evitar
esos comportamientos, mejor!

ejemplo de codigos que deconstruyen: eval(), valueOf()
*/



// FUNCIONES
// se pueden pasar funciones a otras funciones en forma de argumentos. EJEMPLO:
function Usuario (nombre) {   // se declara una funcion con un parametro llamado nombre
    this.nombre = nombre;   // se declara una propiedad llamada nombre y se le asigna el valor del parametro nombre
}
console.log(Usuario.name);   // se imprime el nombre de la funcion
console.log(Usuario.length);    // se imprime el numero de parametros que recibe la funcion

const U = Usuario   // se declara una constante con la funcion Usuario
let user6 = new U("Juan");   // se crea un nuevo objeto con la funcion Usuario
console.log(user6);   // imprime el objeto user6 con el nombre Juan


// hacer lo mismo recibiendo como parametro una función 
function of(Fn, arg) {
    return new Fn(arg);
}

let user7 = of(Usuario, "Carlitos");   // se crea un nuevo objeto con la funcion Usuario, usuario que es una funcion en este caso usada como parametro de otra funcion
console.log(user7);   // imprime el objeto user7 con el nombre Carlitos

// tambien se pueden retornar dentro de otras funciones
function returned() {
    return function () {
        console.log("retornando...");
    }
}
 
let returning = returned();
returning();


// REFERENCIAS
// un comportamiento extraño pero posible en funciones que tienen parametros
// lo que sucede es que se asigna la variable "a" y el parametro "n" lo toma como si fuese otra variable:
 let a = 1;

 function sumar(n) {
    n++;    // esta funcion da entender que se realiza la suma de uno y el resultado será 2
}           // pero eso no sucede porque javascript se comporta de esa forma con dos "variables"
sumar(a);
console.log(a);

// comportamiento con un objeto
// una funcion similar pero en lugar de un parametro con una elemento primitivo se le pasa un objeto
let a1 = { prop : 1}

function suma(n) {
    n.prop++;   
}
suma(a1);
console.log(a1);
// en este caso si se realiza la suma porque los OBJETOS SI se toman como REFERENCIA; las variables no, SE COPIAN
// LO MISMO QUE PASA CON LOS OBJETOS, PASA CON LOS ARRAYS Y LAS FUNCIONES, SI SE REFERENCIAN, Y SE PUEDEN DAR ESTOS CASOS
// DONDE SI SE EFECTUA UNA FUNCION TENIENDO COMO REFERENCIA UN OBJETO

// LOGICA MUY IMPORTANTE COMO DESARROLLADOR DE JAVASCRIPT



// COMO IDENTIFICAR SI UN METODO O UNA PROPIEDAD FUE ELIMINADA DE JAVASCRIPT
const punto = {
    x : 10,
    y : 20,
    dibujar() {
        console.log("dibujando...") // se ejecuta el metodo dibujar
    }
};
// delete punto.dibujar; //de la variable punto se elimino el metodo dibujar
// punto.dibujar();       //se ejecuta el metodo dibujar, que muestra error por la previa eliminación del metodo

if ("dibujar" in punto) {   // se verifica si el metodo dibujar esta en la variable punto, que en este caso se muestra vacío porque no intenta ejecutar el metodo
    punto.dibujar(); // se ejecuta el metodo dibujar
}

//para devolver las propiedades de un objeto
console.log(Object.keys(punto)); // se imprime las propiedades del objeto punto
for (let llave of Object.keys(punto)) {   // se itera sobre las propiedades del objeto punto
    console.log(llave, punto[llave]); // se imprime cada llave y su valor
}
// imprime las propiedades con sus elementos





function cambiarColorPalabra(palabraBuscar, nuevoColor) {
    // Obtenemos todos los elementos con el tag <p> (puedes cambiar esto por otro selector)
    const elementos = document.getElementsByTagName('p');

    // Iteramos sobre cada elemento
    for (let i = 0; i < elementos.length; i++) {
        const elemento = elementos[i];

        // Convertimos el contenido del elemento a un array de palabras
        const palabras = elemento.textContent.split(' ');

        // Iteramos sobre cada palabra
        for (let j = 0; j < palabras.length; j++) {
            const palabra = palabras[j];

            // Si la palabra coincide con la palabra a buscar, envolvemos en una etiqueta <span> con el nuevo estilo
            if (palabra === palabraBuscar) {
                const nuevaPalabra = `<span style="color: ${nuevoColor}">${palabra}</span>`;
                elemento.innerHTML = elemento.innerHTML.replace(palabra, nuevaPalabra);
            }
        }
    }
}

// Ejemplo de uso:
cambiarColorPalabra("function", "#823FA3");

cambiarColorPalabra("for", "#8430D6")

//Creación mía

// function definirEdad(edad) {
//     if (edad >= 18) {
//         console.log("Es mayor de edad")
//     } else {
//         console.log("Es menor de edad")
//     }
// }
// definirEdad(18) // FUNCIONA


// let hora = 19   //HACERLA FUNCIONAR CON UNA (FUNCTION)
// // function definirHora(hora)
// if (hora < 12) {
//     console.log("buenos días " + "sebas")
// } else if (hora < 18) {
//     console.log("buenas tardes " + "sebas")
// } else {
//     console.log("buenas noches " + "sebas")
// }
// definirHora(17)


// while
// let i = 2;
// while (i < 3) {
//     if (i % 2 == 0) {
//         console.log("num.par con WHILE", i);
//     }
//     i++
// }
// console.log("fin")
//primero evalua la condicion y luego, si es true ejecuta el codigo

// //do while
// do {
//     if (i % 2 == 0) {
//         console.log("num.par con DO...WHILE", i);
//     }
//     i++
// } while (i < 2)
// primero ejecuta el codigo y luego evalua si es true, si lo es, realiza la accion

// for
// for (let i = 2; i < 10; i++) {
//     if (i % 2 == 0) {
//         console.log("num.par con FOR", i);
//     }
// }
// todo el codigo en una sola linea
// la inicializacion es la declaracion de la variable
// la comparacion es la que le sigue para declarar si i es menor que 10
// la ajecucion de la accion para incremetar el valor
// por ultimo el codigo para que se deje de ejecutar, colocar el limite

// let i = 0;

// while (i < 10)   {
//     i++;
//     if (i % 2 == 0){
//         break; //o continue
//     }
//     console.log(i)
// }
// le dice a la consola que sume 1 a i hasta que encuentre el primer
// numero par y ahí se detiene
// si se intercambia el break por el continue, le dice la maquina que
// cada numero par que encuentre se lo salte y continue hasta alcanzar
// la condición de suma




