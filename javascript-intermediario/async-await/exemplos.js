/**
 * Luiza Code 4ª edição
 * JavaScript Intermediário > Arrow Functions
 * Data: 02/05/2022
 */

// Funções assíncronas: funções que podem ser executadas sem aguardar retorno (ex. promises)
// Analogias com a vida real: envio de email, sms... faz outras coisas enquanto aguarda a resposta.

function cronometro(segundos) {

    return new Promise(resolve => {
        setTimeout( () => {
            console.log(`Os ${segundos} segundos finalizaram.`);
            resolve(segundos);
        }, segundos * 1000)
    });
}

const executarCronometro = async (segundos) => {

    cronometro(segundos);
    console.log(`Não esperei os ${segundos} segundos para aparecer.`);

    let response = await cronometro(segundos + 1);
    console.log(`Esperei os ${response} segundos para aparecer.`);
}

executarCronometro(3);