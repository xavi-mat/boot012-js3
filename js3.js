'use strict';
////////////////////////////////////////////////////////////////////////////////
// 1. Bucles
console.log('=========');
console.log('1. Bucles');

// Haz un bucle que muestre por consola los números del 4 al 9 inclusive.
//  Utilizad el bucle for.
console.log('Números 4 a 9')
for (let i = 4; i <= 9; i++) {
    console.log(i);
}

// Haz un bucle que muestre por consola los impares del 3 al 17 inclusive.
//  Utilizad el bucle for.
console.log('Impares del 3 al 17');
for (let i = 3; i <= 17; i += 2) {
    console.log(i);
}

// Utiliza la siguiente array para resolver los próximos ejercicios:
let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

// Crea un array con la gente mayor de 25 años y muéstralo por consola. Sin
//  utilizar el método filter de los arrays. Utilizad el bucle for of.
console.log('Mayores de 25 años');
const olderPeople = [];
for (const person of gente) {
    if (person.edad > 25) {
        olderPeople.push(person);
    }
}
console.log(olderPeople);

// Crea un array con la gente que empieza por J. Sin utilizar el método filter
//  de los arrays. Utilizad el bucle for of y muéstralo por consola.
console.log("Empiezan por J");
const jPeople = [];
for (const person of gente) {
    if (person.nombre.toUpperCase().startsWith('J')) {
        jPeople.push(person);
    }
}
console.log(jPeople);

// Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el
//  método filter de los arrays y muéstralo por consola.
console.log("Nombre de 4 letras");
const fourLettersPeople = [];
for (const person of gente) {
    if (person.nombre.length === 4) {
        fourLettersPeople.push(person);
    }
}
console.log(fourLettersPeople);

// Crea un array con la gente que su nombre empieza por J y sean menores de 40
//  años. Sin utilizar el método filter de los arrays y muéstralo por consola.
console.log("Nombre con J y menores de 40");
const j39People = [];
for (const person of gente) {
    if (person.nombre.toUpperCase().startsWith('J') &&
        person.edad < 40) {
        j39People.push(person);
    }
}
console.log(j39People);

////////////////////////////////////////////////////////////////////////////////
// 2. Objetos
console.log("\nObjeto 'ordenador'");
const ordenador = {
    marca: "La pava",
    tipo: "portátil",
    perifericos: [, "touchPad"],
    almacenamiento: {
        discos: [, "HDD"],
        maestro: 0,
    },
};

// TEST 1
if (typeof ordenador === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 2
if (ordenador.marca === "La pava") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 3
if (ordenador.tipo === "portátil") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}


////////////////////////////////////////////////////////////////////////////////
console.log("\nObjeto obj");

const obj = {
    a: {
        b: true,
        c: [, NaN],
    },
    d: 6,
    f: "Esto no es una string".substring(0, 4),
};

// TEST 1
if (typeof obj === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 2
if (typeof obj.a.b === "boolean") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 3
if (typeof obj.a.c[1] === "number") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 4
if (typeof obj.d === "number") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 5
if (obj.d > 4 && obj.d < 8) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 6
if (typeof obj.f === "string") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 7
if (obj.f.length === 4) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}


////////////////////////////////////////////////////////////////////////////////
// Crea un array en la variable llamada arr de tal modo que el siguiente código
//  no muestre por consola 'suspendes'
const arr = [
    {
        name: "pepito",
        age: 25,
    },
    {
        name: "pepito",
        age: 25,
    },
    {
        name: "Jepito",
        age: 24,
    },
];

console.log("\nCrea array");

// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 2
if (typeof arr[0] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 3
if (typeof arr[1] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 4
if (typeof arr[2] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 5
if (arr.length === 3) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 6
if (arr[0].name === arr[1].name) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 6
if (arr[1].name === "pepito") {
    console.log("6b. apruebas");
} else {
    console.log("6b. suspendes");
}

// TEST 7
if (arr[1].age > arr[2].age) {
    console.log("7. apruebas");
} else {
    console.log("7. suspendes");
}
// TEST 8
if (arr[0].age === 25) {
    console.log("8. apruebas");
} else {
    console.log("8. suspendes");
}
// TEST 9
if (typeof arr[2].name === "string") {
    console.log("9. apruebas");
} else {
    console.log("9. suspendes");
}

// TEST 10
if (arr[2].name[0] === "J") {
    console.log("10. apruebas");
} else {
    console.log("10. suspendes");
}


////////////////////////////////////////////////////////////////////////////////
// 3. Funciones

console.log("\nFunciones");

// Crea la función convierteString debe recibir un tipo number y devolver el número como string .
console.log("\nconvierteString");

const convierteString = (num) =>
    isNaN(num) ?
    'Debo ser ejecutada con un número' :
    num.toString();

console.log('4', convierteString('4'));
console.log(4, convierteString(4));

// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'
console.log('alpargata', convierteString('alpargata'));


// Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter.
console.log("\ncaracterInicial");

const caracterInicial = (s) =>
    typeof s === 'string' ?
        s.length > 0 ? s[0] : 'Debo ser ejecutada con un string no vacío' :
    'Debo ser ejecutada con un string';

console.log('Hola', caracterInicial('Hola'));

// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
console.log(String, caracterInicial(String));

// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
console.log("", caracterInicial(""));

// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
console.log("\nÚltimo carácter");

const ultimoCaracter = (s) =>
    typeof s === 'string' ?
        s.length > 0 ? s.slice(-1) : 'Debo ser ejecutada con un string no vacío' :
    'Debo ser ejecutada con un string';

console.log('Hola', ultimoCaracter('Hola'));

// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
console.log(String, ultimoCaracter(String));

// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'
console.log('', ultimoCaracter(''));

// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
console.log("\ncuentaCaracteres");

const cuentaCaracteres = (s) =>
    typeof s === 'string' ?
        s.length > 0 ? s.length : 'Debo ser ejecutada con un string no vacío' :
    'Debo ser ejecutada con un string';

console.log('Hola', cuentaCaracteres('Hola'));

// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'
console.log(String, cuentaCaracteres(String));
console.log('', cuentaCaracteres(''));

// Crea la función getCiudadesOrdenada. La función recibirá una cadena de texto de ciudades separadas por comas y devolverá un array de ciudades ordenadas alfabéticamente si la función no recibe una cadena de texto o recibe una cadena de texto sin comas debe devolver 'no es un formato correcto'
console.log("\ngetCiudadesOrdenada");

const getCiudadesOrdenada = (ciudades) => {

    if (typeof ciudades === 'string') {
        ciudades = ciudades.split(',');
        if (ciudades.length > 1) {
            return ciudades.sort((a,b)=>a.localeCompare(b));
        }
    }
    return 'no es un formato correcto';
};

console.log(NaN, getCiudadesOrdenada(NaN));
console.log("Catamarruc", getCiudadesOrdenada("Catamarruc"));
console.log(
    "Catamarruc,Riola,Villar del Arzobispo,Mora de Rubielos,Rascafría,Peralejos de las Truchas,Ávila,Albacete",
    getCiudadesOrdenada("Catamarruc,Riola,Villar del Arzobispo,Mora de Rubielos,Rascafría,Peralejos de las Truchas,Ávila,Albacete")
);

// Un palíndromo es una palabra que se escribe igual del derecho que del revés
// por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá
// una cadena de texto y deberá devolver si es un palíndromo o no.
console.log("\nesPalindromo:");
const esPalindromo = (pal, start=0, end=null) => {
    if (typeof pal !== 'string' || pal.length === 0) {
        return 'no es un formato correcto';
    }
    if (end===null) {
        end = pal.length-1;
    }
    if (end <= start) {
        return 'SÍ es palíndromo';
    }
    if (pal[start] !== pal[end]) {
        return 'no es palíndromo';
    }
    return esPalindromo(pal, start+1, end-1);
};

// Si la función no recibe una cadena de texto o está vacía 'no es un formato
// correcto'
console.log(34, esPalindromo(34));
console.log("orejero", esPalindromo("orejero"));
console.log("dabalearrozalazorraelabad", esPalindromo("dabalearrozalazorraelabad"));
console.log("entendederas", esPalindromo("entendederas"));


// Crea la función getPrecioMostrar para que devuelva una cadena de texto con
// formato precio con dos decimales. Para 2 debería devolver 2.00 €.


// Si la función no recibe un número debería devolver devolver 'no es un formato
// correcto'


// Crea la función division que acepte como argumento dos números y devuelva el
// resultado de su división


//  Crea la función esPar que acepte como argumento un número y devuelva true si
// es par y false si es impar


// Crear la función ordenarArray2 que acepta como argumento un array de números
// y devuelva un array ordenado de mayor a menor


// Crear la función obtenerImpares que acepta como argumento un array de números
// y devuelva un array con los elementos impares


// Crear la función sumarArray que acepte como argumento un array numérico y
// devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6


// Crear la función multiplicarArray que acepte como argumento un array numérico
// y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24


// Crea una función que dada una array de números, devuelve una nueva array que
// tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]


// Crea una aplicación que nos pida un número por prompt y con un método se lo
// pasamos por parámetro para que nos indique si es o no un número primo, debe
// devolver true si es primo sino false.


// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por
// ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.


// Crea una función checkPasswordcon una variable tipo String que contenga una
// contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando
//     prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y
//     mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la
//     condición de salida (3 intentos y si acierta sale, aunque le queden intentos).


// Crea una función llamada CalculadoraInversa, nos pedirá 2 operandos (int) y un signo aritmético (String), según este último se realizará la operación correspondiente. Al final mostrará el resultado en un cuadro de diálogo. Los signos aritméticos disponibles son:
// +: suma los dos operadores.
// -: resta los operandos.
// *: multiplica los operandos.
// /: divide los operandos, este debe dar un resultado con decimales (double)
// ^: 1o operando como base y 2o como exponente.
// %: módulo, resto de la división entre operando1 y operando2.



// ////////////////////////////////////////////////////////////////////////////////