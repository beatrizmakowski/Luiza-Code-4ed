/**
 * Exercício 3
 * Escreva uma condição em que o usuário escolha a roupa que irá utilizar em várias situações climáticas.
 */

/** Classe representando uma pessoa. */
class Pessoa {
    /**
     * Cria uma nova instância da classe 'Pessoa'
     * @param {string} nome      - Nome da pessoa.
     * @param {string} acessorio - Qual acessório a pessoa irá usar (óculos escuros, guarda-chuva, casaco...)
     */
    constructor(nome, acessorio = '') {
        this.nome = nome;
        this.acessorio = acessorio;
    };
};

let pessoa = new Pessoa('Ana');
let condicoesDoTempo = ['ameno', 'ensolarado', 'chuvoso', 'frio', 'agradável'];
let acessorio = '';

condicoesDoTempo.forEach(condicaoDoTempo => {
    acessorio = (condicaoDoTempo === 'ensolarado' ? 'óculos escuros' :
                 condicaoDoTempo === 'chuvoso'    ? 'guarda-chuva'   : 
                 condicaoDoTempo === 'frio'       ? 'casaco'         : 
                 'nenhum acessório'
                 );
    console.log(`Quando o tempo está ${condicaoDoTempo}, ${pessoa.nome} usa ${acessorio}.`);
});