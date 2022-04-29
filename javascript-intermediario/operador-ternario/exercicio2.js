/**
 * Exercício 2
 * Escreva uma condição em que o usuário possa realizar uma tarefa se ele quiser ou se alguém permitir.
 */

/** Classe representando um usuário. */
class Usuario {
    /**
     * Cria uma nova instância da classe 'Usuario'
     * @param {string} username   - Nome de usuário desta instância.
     * @param {bool} temInteresse - Se o usuário tem interesse em realizar a tarefa (true) ou se não tem (false).
     * @param {bool} temPermissao - Se o usuário tem permissão de realizar a tarefa (true) ou se não tem (false).
     */
    constructor(username, temInteresse = false, temPermissao = false) {
        this.username = username;
        this.temInteresse = temInteresse;
        this.temPermissao = temPermissao;
    };

    /**
     * Altera o status de interesse do usuário em realizar a tarefa.
     * @param {bool} flag - Se o usuário possui interesse em realizar a tarefa (true) ou se não tem (false).
     * @return {Usuario}  - A instância que foi alterada.
     */
    setInteresse(flag) {
        this.temInteresse = flag;
        return this;
    };

     /**
     * Altera o status de permissão do usuário para realizar a tarefa.
     * @param {bool} flag - Se o usuário possui permissão de realizar a tarefa (true) ou se não tem (false).
     * @return {Usuario}  - A instância que foi alterada.
     */
    setPermissao(flag) {
        this.temPermissao = flag;
        return this;
    };
};

let usuarios = [
    new Usuario('user01'),
    new Usuario('user02'),
    new Usuario('user03'), 
    new Usuario('user04')
];
console.log(usuarios);

console.log('\n*** Condição inicial ***')
usuarios.forEach( usuario => {
    let resultado = (usuario.temInteresse ? 'pode' : usuario.temPermissao ? 'pode' : 'não pode');
    console.log(`O ${usuario.username} ${resultado} realizar a tarefa`);
});

console.log('\n*** Atualizando status de interesse e permissão ***');
usuarios[1].setInteresse(true);
usuarios[2].setPermissao(true);
usuarios[3].setInteresse(true);
usuarios[3].setPermissao(true);
console.log(usuarios);

console.log('\n*** Avaliando novamente após a atualização de interesse e permissão ***');
usuarios.forEach( usuario => {
    let resultado = (usuario.temInteresse ? 'pode' : usuario.temPermissao ? 'pode' : 'não pode');
    console.log(`O ${usuario.username} ${resultado} realizar a tarefa`);
});