"use strict";
// data: 10 / 04 / 2022
// ===> Exemplo 01 - Optional Parameters
function informarDadosPessoa(idPessoa, nome, email) {
    console.log('Id Funcionário...: ', idPessoa, 'Nome...:', nome);
    if (email != undefined)
        console.log('E-mail...: ', email);
}
informarDadosPessoa(28, 'Lucas');
informarDadosPessoa(28, 'Nicolly', 'nicolly@hotmail.com');
// ===> Exemplo 02 
function mensagemLog(mensagem, usuarioId) {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId || 'Usuário não conectado');
}
mensagemLog('Atualizar Pagina');
mensagemLog('Usuário logado com sucesso', 28);
let funcionario;
funcionario = {
    idFuncionario: 28,
    nome: 'lucas',
    idade: 28,
    email: 'lucas@hotmail.com'
};
console.log(funcionario);
