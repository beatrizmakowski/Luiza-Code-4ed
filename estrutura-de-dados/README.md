# Exercícios de Estrutura de dados

Repositório criado para armazenar os códigos relativos aos exercícios sobre Estrutura de dados propostos na aula do dia 23/04.

## :open_book: Índice
* [Hash](#hash)

## Hash

### :dart: Objetivo
Implementar uma função hash para armazenar e acessar um conjunto de nomes (strings).

### :bulb: Solução implementada
### Algoritmo
Algoritmo da função ``new_hash()`` :
1. Transforma a palavra em lower case.
2. Para cada caractere da palavra:
    1. Se o índice do caractere na palavra é [0] ou par, soma o valor ASCII do caractere.
    2. Se o índice do caractere na palavra é ímpar, subtrai o valor ASCII do caractere.
3. Como o valor desse conjunto de somas e subtrações pode ser negativo, tomamos o valor absoluto. Esse valor é o hash da palavra.
4. Resolvemos as colisões procurando o próximo índice disponível no array onde as palavras serão armazenadas.
### Desempenho
O desempenho da nova função hash foi comparado com a função hash original ``hash = word.length`` quanto aos quesitos:
* tempo de execução
* tamanho da hashtable (ocupação de memória)
* número de colisões

Os resultados são apresentados a seguir:

//imagem aqui

Conclusão: o número de colisões foi reduzido em cerca de 19%, mantendo valores praticamente idênticos de tempo de execução e ocupação de memória.

>[Código fonte](#)

[Retornar ao índice](#openbook-índice)