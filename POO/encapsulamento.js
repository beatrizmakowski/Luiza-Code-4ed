/**
 * Exercício 2: Pesquisar sobre modos de encapsular atributos (#) e aplicá-los na classe Pessoa
 * 
 * Para encapsular um atributo, precisamos declará-lo dentro da função com o símbolo '#' antes do
 * construtor. Todas as referências subsequentes a este atributo, dentro da classe, deve conter o
 * símbolo '#' antes do seu nome.
 * Atributos privados só podem ser acessados por métodos da classe que o contém.
 * 
 */

class Person {
    #age

    constructor(firstName, age) {
        this.firstName = firstName;
        this.#age = age;
    }

    setAge(age) {
        this.age = age;
    }

    isMinor() {
        if (this.#age < 18) {
            console.log(`${this.firstName} is a minor.`);
            return true;
        }
        else {
            console.log(`${this.firstName} is not a minor.`);
            return false;
        }
    }

    printAge() {
        console.log(this.#age);
    }
}

let person1 = new Person('Isabela', 11);
let person2 = new Person('Matheus', 38);

console.log(person1); // { firstName: 'Isabela' } -- não exibe que o atributo age existe nem seu valor.
console.log(person2.age); // undefined -- atributos privados só podem ser acessados dentro da classe
person2.printAge(); // 38 -- bypass: acessar o atibuto age dentro da classe para imprimi-lo no console

person1.isMinor();
person2.isMinor();