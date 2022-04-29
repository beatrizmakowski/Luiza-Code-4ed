/*
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Spread operator
 * Data: 29/04/2022
 */

// O spread operator (espalhamento) permite que você expanda um objeto/array iterável para uso.
// Objetivo: criar uma cópia do objeto, preservando o original e manipulando apenas a cópia.

// Ao invés de:
var pessoa = { nome: 'eduardo', idade: 29, profissao: 'desenvolvedor'};

// Podemos escrever:
var outraPessoa = {...pessoa};

// console.log(pessoa);
// console.log(outraPessoa); // outraPessoa é uma cópia de pessoa

pessoa = {
    nome: 'Eduardo',
    idade: 29,
    sexo: 'Masculino',
    contato: {
        email: 'eduardo@mail.com',
        telefone: '(11) 5555-5555'
    },
    estado: 'SP',
    profissao: 'Desenvolvedor',
    empresa: 'Magalu'
}

var alterarPessoa = {...pessoa, nome: 'Eduardo Pereira', contato: {...pessoa.contato, telefone: '(11) 7777-7777'}};
//console.log(pessoa, alterarPessoa);

// Cria um novo objeto a partir do objeto original e o objeto modificado.
var returnPessoa = { ...pessoa, ...alterarPessoa };
console.log(returnPessoa);