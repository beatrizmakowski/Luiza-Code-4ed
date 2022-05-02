# Exercícios de Spread Operator

Repositório criado para armazenar os códigos relativos aos exercícios sobre Spread Operator propostos no curso de JavaScript Intermediário do LuizaCode 4ª edição.

## :open_book: Índice
* [Exercício 1](#exercício-1)
* [Exercício 2](#exercício-2)
* [Exercício 3](#exercício-3)
* [Autora](#autora)

## Exercício 1

### :dart: Objetivo
Escreva um objeto e faça uma cópia dele.

### :bulb: Solução implementada

> [Código fonte](https://github.com/beatrizmakowski/Luiza-Code-4ed/blob/main/javascript-intermediario/spread-operator/exercicio1.js)

### Algoritmo

A solução implementada foi criar um objeto ``livro``, com os atibutos ``titulo``, ``autor`` (contendo ``nome`` e ``pais``), ``ano`` e ``editora``. 

A cópia deste objeto foi obtida através do spread operator:

``let copiaDeLivro = {...livro};``

### Resultados

![image](https://user-images.githubusercontent.com/86008015/166228769-a82dd013-85e4-46b2-a24e-e113bc7ec8ec.png)

:arrow_up: [Retornar ao índice](#open_book-índice)


## Exercício 2

### :dart: Objetivo
Usando o exemplo do exercício anterior, altere qualquer chave desse objeto com outro valor.

### :bulb: Solução implementada

> [Código fonte](https://github.com/beatrizmakowski/Luiza-Code-4ed/blob/main/javascript-intermediario/spread-operator/exercicio2.js)

### Algoritmo

Utilizando o mesmo objeto ``livro`` do exercício anterior, os atributos ``titulo`` e ``ano`` foram alterados utilizando o spread operator.

``let copiaDeLivro = {...livro, titulo: 'Cem anos de Solidão', ano: '1967'};``

### Resultados

![image](https://user-images.githubusercontent.com/86008015/166228814-08f6fa73-1799-41e5-95b0-477b7134b7fa.png)

:arrow_up: [Retornar ao índice](#open_book-índice)

## Exercício 3
### :dart: Objetivo
Escreva seu nome e separe-o usando a sintaxe de spread operator em um array.

### :bulb: Solução implementada

> [Código fonte](https://github.com/beatrizmakowski/Luiza-Code-4ed/blob/main/javascript-intermediario/spread-operator/exercicio3.js)

### Algoritmo

A solução implementada foi basicamente:

``let spreadArray = [...nome];``

### Resultados

![image](https://user-images.githubusercontent.com/86008015/166228841-0a5bb7ac-845d-48e5-9ec3-16901167b861.png)

:arrow_up: [Retornar ao índice](#open_book-índice)

## Autora

<a href="https://github.com/beatrizmakowski"> <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/86008015?v=4" width="100px;" alt="Personal photo"/> </a>

Made by **Beatriz Makowski**. Get in touch! 👇

[![Github Badge](https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=Github&logoColor=white&link=https://github.com/beatrizmakowski)](https://github.com/beatrizmakowski)  [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/beatriz-makowski/)](https://www.linkedin.com/in/beatriz-makowski/)  [![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:bemakow@gmail.com)](mailto:bemakow@gmail.com)
