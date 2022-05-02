/*
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Template literals
 * Data: 29/04/2022
 *
 * Exercício 1
 * Escreva uma frase que contenha seu nome, sua idade e sua atividade favorita.
 */

const nome = 'Beatriz';
const today = new Date();
const idade = today.getFullYear() - 1995;
const atividadeFavorita = 'codar'

console.log(`Hello World! Meu nome é ${nome}, tenho ${idade} anos e minha atividade favorita é ${atividadeFavorita}.`);
