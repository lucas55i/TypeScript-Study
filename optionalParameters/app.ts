// data: 10 / 04 / 2022


// ===> Exemplo 01 - Optional Parameters
function informarDadosPessoa(idPessoa: number, nome: string, email?: string) {
    console.log('Id Funcionário...: ', idPessoa, 'Nome...:', nome);

    if (email != undefined) console.log('E-mail...: ', email)
}

informarDadosPessoa(28, 'Lucas');
informarDadosPessoa(28, 'Nicolly', 'nicolly@hotmail.com');
// ===> Exemplo 02 
function mensagemLog(mensagem: string, usuarioId?: number) {
    const horaLog = new Date().toLocaleTimeString()

    console.log(horaLog, mensagem, usuarioId || 'Usuário não conectado')
}
mensagemLog('Atualizar Pagina')
mensagemLog('Usuário logado com sucesso', 28)


// ===> Exemplo 03

type Pessoa = {
    idFuncionario: number;
    nome: string;
    idade?: number;
    email?: string;
};
let funcionario: Pessoa;

funcionario = {
    idFuncionario: 28,
    nome: 'lucas',
    idade: 28,
    email: 'lucas@hotmail.com'
}

console.log(funcionario)