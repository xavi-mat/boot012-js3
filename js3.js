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
    if (person.edad>25) {
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



////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////