# Exercícios 30/04/2022

Repositório criado para armazenar os códigos relativos aos exercícios propostos na aula síncrona de 
JavaScript Intermediário do LuizaCode 4ª edição, realizada em 30/04/2022.

## :open_book: Índice
* [Exercício 1](#exercício-1)
* [Exercício 2](#exercício-2)
* [Exercício 3](#exercício-3)
* [Autora](#autora)

## Exercício 1

### :dart: Objetivo
Escreva uma arrow function que irá receber os parâmetros CPF, data de nascimento, e CEP, todos em 
string e sem formatação. Formate-os com regex e exiba no console 

### :bulb: Solução implementada

> [Código fonte](https://github.com/beatrizmakowski/Luiza-Code-4ed/blob/main/javascript-intermediario/exercicios-aula-30-04-2022/exercicio1.js)

### Algoritmo

A solução implementada foi criar constantes para as expressões regulares para CPF, data e CEP, bem 
como constantes para a formatação do "replace".

A arrow function ``formatarCadastro()`` recebe um objeto ``cadastro`` e utiliza desestructuring para 
acessar seus valores. Os valores são formatados utilizando as constantes pré-definidas. A função
retorna um objeto ``cadastro`` com os valores de CPF, data de nascimento e CEP formatados.

### Resultados

[todo]


:arrow_up: [Retornar ao índice](#open_book-índice)


## Exercício 2

### :dart: Objetivo
Dado o objeto abaixo, extraia cada propriedade com destructuring.
```
const person = {
   firstName: 'John',
   lastName: 'Doe'
};
```

### :bulb: Solução implementada

> [Código fonte](https://github.com/beatrizmakowski/Luiza-Code-4ed/blob/main/javascript-intermediario/exercicios-aula-30-04-2022/exercicio2.js)

### Algoritmo

A solução implementada é basicamente:

```
 let {firstName, lastName} = person;
```

### Resultados

[todo]

:arrow_up: [Retornar ao índice](#open_book-índice)

## Exercício 3
### :dart: Objetivo
Dado o objeto abaixo, extraia os dados pessoais de John e todo o restante (endereço) em uma 
variável chamada endereco. Ao final deste exercício, você deve ter apenas 4 variáveis.

### :bulb: Solução implementada

> [Código fonte](https://github.com/beatrizmakowski/Luiza-Code-4ed/blob/main/javascript-intermediario/exercicios-aula-30-04-2022/exercicio3.js)

### Algoritmo

A solução implementada é basicamente:

```
let { firstName, lastName, age, ...address } = person;
```

### Resultados

[todo]

:arrow_up: [Retornar ao índice](#open_book-índice)

## Autora

<a href="https://github.com/beatrizmakowski"> <img src="https://avatars.githubusercontent.com/u/86008015?v=4" width="100px;" alt="Personal photo"/> </a>

Made by **Beatriz Makowski**. Get in touch! 👇

[![Github Badge](https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=Github&logoColor=white&link=https://github.com/beatrizmakowski)](https://github.com/beatrizmakowski)  [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/beatriz-makowski/)](https://www.linkedin.com/in/beatriz-makowski/)  [![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:bemakow@gmail.com)](mailto:bemakow@gmail.com)
