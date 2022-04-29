/**
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Arrow Functions
 * Data: 29/04/2022
 * 
 * Exercício 1
 * Escreva uma função que retorne se o valor informado é par ou ímpar.
 */

/**
 * Verifica se o número passado é par.
 * @param {number} number - número a ser verificado
 * @returns {bool} 'true' se o número for par ou 'false' se o número for ímpar.
 */

 const printParouImpar = numero => {
    resultado = (numero % 2 === 0) ? 'par' : 'ímpar';
    console.log(`O número ${numero} é ${resultado}.`);
};

let resultado = '';
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach( numero => printParouImpar(numero));