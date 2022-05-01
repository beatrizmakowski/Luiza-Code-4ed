/**
 * JavaScript Intermediário - Aula 30/04/2022
 * 
 * const person = {
 *  firstName: 'John',
 *  lastName: 'Doe',
 *  age: 30,
 *  country: 'Brazil',
 *  city: 'São Paulo',
 *  state: 'SP',
 *  postalCode: '01001001',
 *  neighborhood: 'Centro'
 * };
 * 
 * Dado o objeto acima, extraia os dados pessoais de John e todo o restante (endereço) em uma
 * variável chamada endereco. Ao final deste exercício, você deve ter apenas 4 variáveis.
 */

 const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    country: 'Brazil',
    city: 'São Paulo',
    state: 'SP',
    postalCode: '01001001',
    neighborhood: 'Centro'
 };

let { firstName, lastName, age, ...address } = person;

 console.log(`Variável firstName: ${firstName}`);
 console.log(`Variável lastName: ${lastName}`);
 console.log(`Variável age: ${age}`);
 console.log(`Variável address: `);
 console.log(address);