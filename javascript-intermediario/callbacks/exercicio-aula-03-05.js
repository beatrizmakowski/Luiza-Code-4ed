//Transformar o código abaixo em funções, usar callback

let valorSoma1 = 10;
let valorSoma2 = 20;

let soma = valorSoma1 + valorSoma2;
// console.log(`O resultado da soma foi ${soma}.`);

let valorMulti1 = 50;
let valorMulti2 = 2;

let multiplicacao = valorMulti1 * valorMulti2;
// console.log(`O resultado da multiplicação foi ${multiplicacao}.`);

///////////////////////////////////////////////////////////////////////////////////////////////////

// const somar = (valor1, valor2, callback) => {
//     const resultado = valor1 + valor2;
//     callback(resultado);
// }

// const multiplicar = (valor1, valor2, callback) => {
//     const resultado = valor1 * valor2;
//     callback(resultado);
// }

const calcular = (valor1, operacao, valor2, callback) => {
    
    const resultado = 
        (operacao === '+') ? valor1 + valor2 :
        (operacao === '-') ? valor1 - valor2 :
        (operacao === '*') ? valor1 * valor2 :
        (operacao === '/') ? valor1 / valor2 :
        console.error(`Operação não reconhecida.`);

    if (resultado === undefined)
        return;

    callback(resultado);
}

const imprimir = resultado => console.log(`O resultado é : ${resultado}`);

calcular(1, '+', 2, imprimir);
calcular(1, '-', 2, imprimir);
calcular(1, '*', 2, imprimir);
calcular(1, '/', 2, imprimir);
calcular(1, 'x', 2, imprimir);