/*
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Template literals
 * Data: 29/04/2022
 *
 * Exercício 2
 * Faça a correção da expressão a seguir para que imprima a idade e o doce favorito
 * `eu tenho ${`${idade}` anos} e gosto muito de `${chocolate}`
 */

const today = new Date();
const idade = today.getYear() - 95;
const doce = 'chocolate';

const expressao = `Eu tenho ${idade} anos e gosto muito de ${doce}.`;

console.log(expressao);