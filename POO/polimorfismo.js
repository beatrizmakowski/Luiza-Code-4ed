/**
 *  Exercício: Criar novas funcionalidades para a Conta Pupança.
 */

class Conta {
    constructor(numero, titular) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = 0;
    }

    displaySaldo() {
    console.log(`Saldo atual: ${this.saldo}`);
    }
    
    displaySuccessMessage() {
        console.log('Operação efetuada com sucesso!');
        this.displaySaldo();
    }

    displayErrorSaldo() {
        console.error('Operação não permitida: saldo insuficiente.');
        this.displaySaldo();
    }

    depositar(valor) {
        this.saldo += valor;
        this.displaySuccessMessage();
    }
  
    sacar(valor) {
      if (this.saldo >= valor) {
        this.saldo -= valor;
        this.displaySuccessMessagecess();
      } else {
        this.displayErrorSaldo();
      }
    }
}
  
class ContaCorrente extends Conta {
    constructor(numero, titular) {
        super(numero, titular);
    }
}
  
class ContaPoupanca extends Conta {
    constructor(numero, titular) {
        super(numero, titular);
    }

    // Funcionalidade: Transferências feitas de uma conta poupanca para outra conta de mesma 
    // titularidade não terão acréscimo de taxa. Em contrapartida, transferências feitas de
    // uma conta poupanca para outra conta de titularidade diferente terá taxa de R$2,00.
    transferir(contaDestino, valor) {
        let taxa;
        taxa = (this.titular === contaDestino.titular) ? 0 : 2.00;
        if (this.saldo >= (valor + taxa)) {
            contaDestino.saldo += valor;
            this.saldo -= (valor + taxa);
            this.displaySuccessMessage();
        }
        else {
            this.displayErrorSaldo();
        }
    }
  }
  
let conta1 = new ContaCorrente(321, 'Jose Jr');
let conta2 = new ContaPoupanca(123, 'Jose Jr');
let conta3 = new ContaCorrente(456, 'Maria');

conta1.depositar(200); // Saldo conta1: 200
conta1.transferir(conta2, 100); // Saldo conta1: 100
conta1.transferir(conta3, 100); // Resulta em erro pois saldo deve ser >= valor a ser transferido + taxa
