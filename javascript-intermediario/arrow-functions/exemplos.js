/**
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Arrow Functions
 * Data: 29/04/2022
 */

/* --- Primeiro exemplo --- */

// function sum(number1, number2) {
//     return number1 + number2;
// }

const sum = (number1, number2) => {
    return number1 + number2;
}

let resultado = sum(2, 2);
console.log(`O resultado é: ${resultado}`);

/* --- Segundo exemplo --- */

const sum_V2 = (number1, number2) => number1 + number2;

resultado = sum_V2(3, 6);
console.log(`O resultado é: ${resultado}`);


