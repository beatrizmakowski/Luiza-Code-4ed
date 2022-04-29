/*
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Spread operator
 * Data: 29/04/2022
 * 
 * Exercício 1 : Escreva um objeto e faça uma cópia dele.
 */

let livro = {
    titulo: 'Amor nos Tempos do Cólera',
    autor: {
        nome: 'Gabriel García Marques',
        pais: 'Colômbia'
    },
    ano: '1985',
    editora: 'Record'
};

let copiaDeLivro = {...livro};

console.log('Objeto original: ', livro);
console.log('Objeto copiado: ', copiaDeLivro);