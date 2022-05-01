/**
 * JavaScript Intermediário - Aula 30/04/2022
 * 
 * const person = {
 *  firstName: 'John',
 *  lastName: 'Doe'
 * };
 * 
 * Dado o objeto acima, extraia cada propriedade com destructuring
 */

 const person = {
    firstName: 'John',
    lastName: 'Doe'
 };

 let {firstName, lastName} = person;

 console.log(firstName, lastName);