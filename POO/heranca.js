/**
 * Exercício 1 : Implemente uma funcionalidade abstrata na classe Pessoa e a acesse nas classes 
 * PessoaFisica e PessoaJuridica.
 * 
 * Exercício 2 : Implemente uma funcionalidade específica para PessoaFisica e outra para
 * PessoaJuridica 
 */

/**
 * Pessoa.
 * 
 * @class Pessoa
 */
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    // Funcionalidade abstrata : pode ser acessada por instâncias de ambas as classes
    displayType() {
        console.log(`Tipo: ${this.type}`);
    }

    displayImpostosDevidos() {
        // Funcionalidades para somar todos os impostos devidos
        let total = 1500;
        let formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        console.log('O total devido em impostos é: ' + formatter.format(total));
    }
}

/**
 * Pessoa Física.
 * 
 * @class PessoaFisica
 * @extends {Pessoa}
 */
class PessoaFisica extends Pessoa {
    constructor (nome, CPF = undefined) {
        super(nome);
        this.CPF = CPF;
        this.type = 'Pessoa Física'
    }
    
    setCPF(CPF) {
        this.CPF = CPF;
    }

    getCPF(CPF) {
        return this.CPF;
    }

    declararIRPF() {
        // Funcionalidades para declarar o Imposto de Renda de Pessoa Física.
    }
}

/**
 * Pessoa Jurídica.
 * 
 * @class PessoaJuridica
 * @extends {Pessoa}
 */
class PessoaJuridica extends Pessoa {
    constructor (nome, CNPJ = undefined) {
        super(nome);
        this.CNPJ = CNPJ;
        this.type = 'Pessoa Jurídica'
    }

    setCNPJ(CNPJ) {
        this.CNPJ = CNPJ;
    }

    getCNPJ () {
        return this.CNPJ;
    }

    declararIRPJ() {
        // Funcionalidades para declarar Imposto de Renda de Pessoa Jurídica.
    }
}

//let pessoa1 = new Pessoa(); // Error: Abstract classes can't be instantiated.
let pessoa2 = new PessoaFisica('Amanda Coimbra', '123456');
let pessoa3 = new PessoaJuridica('Magalu', '123456790');
console.log(pessoa2);
console.log(pessoa3);
pessoa2.displayType();
pessoa3.displayType();
pessoa2.displayImpostosDevidos();
pessoa3.displayImpostosDevidos();
