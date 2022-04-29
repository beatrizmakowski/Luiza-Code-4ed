/* --- Primeiro exemplo --- */

let idade = 16;

// if (idade >= 18) {
//     console.log('Maior de idade');
// } else {
//     console.log('Menor de idade');
// }

console.log(idade >= 18 ? 'Maior de idade' : 'Menor de idade');


/* --- Segundo exemplo --- */

let profissaoPessoa = 'limpeza';
console.log(profissaoPessoa === 'gerente' ? 'Acesso permitido' : profissaoPessoa === 'programador' ? 'Peça acesso ao seu gerente' : 'Acesso negado');


let cargosEquipe = ['gerente', 'programador', 'limpeza'];

cargosEquipe.forEach(profissaoPessoa => {
    console.log(profissaoPessoa === 'gerente' ? 'Acesso permitido' : profissaoPessoa === 'programador' ? 'Peça acesso ao seu gerente' : 'Acesso negado');
});