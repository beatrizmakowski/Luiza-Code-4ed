/*
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Match && Regex
 * Data: 29/04/2022
 * 
 */

// As regular expressions (regex) são padrões comumente utilizados para selecionar, testar, ou
// validar um conjunto de caracteres. Sua utilização é bem comum principamente na validação de
// dados em uma string.
// Por exemplo, ao receber os dados de uma pessoa em um formulário, é possível checar se o dado
// inserido é válido e possui a formatação esperada.
//
// Exemplo de validação de placa de carro:
let placa = 'AAA-0000'
let reg = /^[A-Z]{3}\-\d{4}$/g
placa.match(reg)

// Placa de carro
const regexPlaca = /^[A-Z]{3}\-\d{4}$/gmi

// CPF
// ^\d{3}\.\d{3}\.\d{3}\-\d{2}$

// Data
const regexData = /^[0-9]{2}\/[1-9]{2}\/[0-9]{4}/

// Começa e termina com uma "/"
// Possui um conjunto de instruções e flags
// g -> global
// m -> multiline
// i -> case insensitive

placa = 'FJQ-5837'
console.log(placa.match(/^[A-Z]{3}\-\d{4}$/gm));

