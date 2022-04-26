# Exercícios de Programação Orientada a Objetos

Repositório criado para armazenar os códigos relativos aos exercícios sobre Programação Orientada a Objetos propostos na aula do dia 23/04.

# Abstração

## :dart: Objetivo
Criar um exemplo de abstração de algo do seu dia a dia dia a dia.

## :bulb: Solução implementada
O exemplo escolhido foi um instalador de softwares.

O usuário só precisa executar o método ``installAndRun()``. Este método se encarrega de "chamar" todos os demais métodos necessários, como o ``checkSystemRequirements()``, ``createShortcut()``, entre outros.

Esta implementação abstrai a complexidade do instalador e todas as suas funcionalidades para apenas uma função.

> [Código fonte](https://github.com/beatrizmakowski/Luiza-Code-4ed/blob/main/POO/abstracao.js)

# Encapsulamento
## :dart: Objetivo
Pesquisar modos de encapsular atributos
## :bulb: Solução implementada
O atributo escolhido para ser encapsulado foi o atributo ``age`` da classe ``Person``.

Para encapsular um atributo, precisamos declará-lo dentro da função com o símbolo ``#`` antes do construtor. Todas as referências subsequentes a este atributo, dentro da classe, deve conter o símbolo ``#`` antes do seu nome. 

Atributos privados só podem ser acessados por métodos da classe que o contém. Portanto, um comando que tenta acessar o atributo ``age`` a partir do escopo globar irá retornar ``undefined``.
> [Código fonte](https://github.com/beatrizmakowski/Luiza-Code-4ed/blob/main/POO/encapsulamento.js)

# Herança
## :dart: Objetivo
* Exercício 1 : Implementar uma funcionalidade abstrata na classe "mãe" ``Pessoa`` e a acesse nas classes "filhas" ``PessoaFisica`` e ``PessoaJuridica``.
* Exercício 2 : Implementar uma funcionalidade específica para ``PessoaFisica`` e outra para ``PessoaJuridica``. 

## :bulb: Solução implementada
### Exercício 1
Foram implementadas duas funcionalidades, ``displayType()`` e ``displayImpostosDevidos()`` na class "mãe" ``Pessoa``. Ambos os métodos podem ser acessados a partir de instâncias das classes "filhas".
### Exercício 2
Foi implementado método ``declararIRPF()`` para a classe ``PessoaFisica`` e o método ``declararIRPJ()`` para a classe ``PessoaJuridica``. Ambos só podem ser acessados por instâncias das respectivas classes.
> [Código fonte](https://github.com/beatrizmakowski/Luiza-Code-4ed/blob/main/POO/heranca.js)

# Polimorfismo
## :dart: Objetivo
Implementar novas funcionalidades para a classe ``Conta Poupança``.
## :bulb: Solução implementada
Foi criado o método ``transferir()`` com as seguintes regras de negócio:
* Transferências feitas de uma conta poupança para outra conta (de qualquer tipo) de mesma titularidade não terão acréscimo de taxa.
* Em contrapartida, transferências feitas de uma conta poupanca para outra conta (de qualquer tipo) de titularidade diferente terá taxa de R$ 2,00.
> [Código fonte](https://github.com/beatrizmakowski/Luiza-Code-4ed/blob/main/POO/polimorfismo.js)
