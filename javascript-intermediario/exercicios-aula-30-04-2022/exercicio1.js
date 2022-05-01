/**
 * JavaScript Intermediário - Aula 30/04/2022
 * 
 * Exercício 1
 * Escreva uma arrow function que irá receber os parâmetros CPF, data de nascimento, e CEP,
 * todos em string e sem formatação. Formate-os com regex e exiba no console 
 */

const regexCPF = /^(\d{3})(\d{3})(\d{3})(\d{2})$/g;
const replaceCPF = '$1.$2.$3-$4';

const regexDataNascimento = /(\d{2})(\d{2})(\d{4})$/g;
const replaceDataNascimento = '$1/$2/$3';

const regexCEP = /(\d{5})(\d{3})/g;
const replaceCEP = '$1-$2';


const formatarCadastro = (cadastro) => {
    
    let {CPF, dataNascimento, CEP} = cadastro;

    let formattedCPF = CPF.replace(regexCPF, replaceCPF);
    let formattedDataNascimento = dataNascimento.replace(regexDataNascimento, replaceDataNascimento);
    let formattedCEP = CEP.replace(regexCEP, replaceCEP);

    let formattedCadastro = {...cadastro, 'CPF': formattedCPF, 'dataNascimento': formattedDataNascimento, 'CEP': formattedCEP};
    return formattedCadastro;
};


const testes = [
    {
        CPF: '11122233344',
        dataNascimento: '11223333',
        CEP: '11222333'
    },
    {
        CPF: '15883538266',
        dataNascimento: '01061994',
        CEP: '90360280'
    }
];

testes.forEach( teste => {
    console.log(`\n\nAntes de formatar: `);
    console.log(teste);

    let testeFormatado = formatarCadastro(teste);

    console.log(`\nDepois de formatar: `);
    console.log(testeFormatado);
});