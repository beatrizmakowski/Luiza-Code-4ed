/*
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Spread operator
 * Data: 29/04/2022
 * 
 * Exercício 3 : Escreva seu nome e separe-o usando a sintaxe de spread operator em um array.
 */

let pessoa = {
    nome: 'Beatriz Makowski'
};
let {nome} = {...pessoa};
let spreadArray = [...nome];
console.log(spreadArray);