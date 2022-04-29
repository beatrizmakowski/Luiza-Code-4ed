/*
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Spread operator
 * Data: 29/04/2022
 * 
 * Exercício 2 : Usando o exemplo do exercício anterior, altere qualquer chave desse objeto com outro valor.
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

let copiaDeLivro = {...livro, titulo: 'Cem anos de Solidão', ano: '1967'};

console.log('Objeto original: ', livro);
console.log('Objeto copiado e alterado: ', copiaDeLivro);