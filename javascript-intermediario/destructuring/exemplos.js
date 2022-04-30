/*
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Destructuring
 * Data: 29/04/2022
 */

/** Classe representando uma pessoa. */
class Pessoa {
    /**
     * Cria uma nova instância da classe 'Pessoa'
     * @param {string} nome  - Nome da pessoa.
     * @param {number} idade - Idade da pessoa.
     */
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const pessoaExemplo = new Pessoa('Joana', 36);


// O destructuring (ou desestruturamento) consiste em extrair dados de um objeto ou um array e
// armazená-los em uma variável.

// Ao invés de:
//var nome = pessoaExemplo.nome;
//var idade = pessoaExemplo.idade;

// Podemos escrever:
var {nome} = pessoaExemplo;
var {idade} = pessoaExemplo;
console.log(nome);
console.log(idade);

var pessoa = {
    nome: 'Eduardo',
    contato: {
        email: 'eduardo@luizalabs.com',
        telefone: '(11) 5555-5555'
    },
    endereco: {
        rua: 'xxxxx',
        cidade: 'São Paulo',
        estado: 'SP'
    }
}

var {nome, contato, endereco} = pessoa;
var {email} = contato;
var {cidade} = endereco;

console.log(nome, email, cidade);


const frutas = ['maçã', 'pera', 'uva', 'abacaxi'];
var [,,,abacaxi] = frutas;
console.log(abacaxi);