/**
 * Exercício 1
 * Escreva uma condição em que o usuário seja permitido dirigir.
 */

/** Classe representando uma pessoa. */
 class Pessoa {
    /**
     * Cria uma nova instância da classe 'Pessoa'
     * @param {string} nome            - Nome da pessoa.
     * @param {bool} possuiHabilitacao - Se a pessoa possui habilitação (true) ou se não possui habilitação (false).
     */
    constructor(nome, possuiHabilitacao) {
        this.nome = nome;
        this.possuiHabilitacao = possuiHabilitacao;
    };
};

let equipe = [
    new Pessoa('Mariana', true),
    new Pessoa('João', false),
    new Pessoa('Andressa', false),
    new Pessoa('Pedro', true)
];

equipe.forEach( pessoa => {
    let resultado = (pessoa.possuiHabilitacao ? `${pessoa.nome} pode dirigir.` : `${pessoa.nome} não pode dirigir.`);
    console.log(resultado);
});