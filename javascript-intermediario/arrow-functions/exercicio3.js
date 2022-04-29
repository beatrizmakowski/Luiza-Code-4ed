/*
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Arrow Functions
 * Data: 29/04/2022
 *
 * Exercício 3
 * Escreva uma função que retorna um cumprimento.
 */

/**
 * Retorna um cumprimento baseado no horário do sistema.
 * @returns {string} cumprimeto
 */
 const cumprimentar = () => {
    const today = new Date();
    const hora = today.getHours();
    return (
        (hora >= 12 && hora < 19) ? console.log('Boa tarde!') :
        (hora >= 19 && hora < 4)  ? console.log('Boa noite!') :
        console.log('Bom dia!'))
 };

cumprimentar();