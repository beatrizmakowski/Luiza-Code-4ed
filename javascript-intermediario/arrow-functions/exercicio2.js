/*
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Arrow Functions
 * Data: 29/04/2022
 *
 * Exercício 2
 * Escreva uma função que recebe dois números e retorna a soma entre eles.
 */

/**
 * Retorna a soma de dois números.
 * @param {number} number1
 * @param {number} number2
 * @returns {number} a soma dos dois números
 */
const somar = (number1, number2) => number1 + number2;

let resultado, numero1, numero2;
for (let i = 0; i < 10; i++) {
    numero1 = Math.floor(Math.random() * 100);
    numero2 = Math.floor(Math.random() * 100);
    resultado = somar(numero1, numero2);
    console.log(`A soma de ${numero1} e ${numero2} é ${resultado}`);
}
