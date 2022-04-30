/*
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Callbacks
 * Data: 29/04/2022
 */

// Callback é um função que é executada após outra função ser concluída

function exibirConsole(resultado) {
    console.log(`O resultado da soma foi: ${resultado}`);
}

function exibirAlerta(resultado) {
    console.log(`O resultado da soma foi: ${resultado}`);
}

function realizarSoma(valor1, valor2, callback) {
    let resultado = valor1 + valor2;
    callback(resultado);
}

realizarSoma(10, 20, exibirAlerta);
realizarSoma(1352, 1524, exibirConsole);
realizarSoma(1, 1, exibirConsole);


import fetch from 'node-fetch';
function consumirAPI() {

    let opts = {
        method : 'GET',
        headers : {}
    };

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados', opts)
        .then( function (response) {
            return response.json();
        })
        .then( function (response) {
            
            for (let index in response) {

                let uf = response[index];
                console.log(`${uf.id} - ${uf.sigla} - ${uf.nome}`);
            }
        })
}
consumirAPI();
