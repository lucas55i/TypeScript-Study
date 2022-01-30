"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Exemplo 01 -  Exemplo básico do uso do Type Object
const pessoa = {
    nome: "Lucas",
    sobrenome: "Jesus",
    idade: 21,
    funcao: "Desenvolvedor FullStack JR.",
};
console.log(pessoa);
// ===> Exemplo 02 -  object como parametros de função
function onboarding01(funcionario) {
    return "Seja Bem-vindo: " + funcionario.nome;
}
console.log(onboarding01({ nome: "Lucas" }));
function onboarding02(pessoa) {
    return ("Seja bem-vindo " +
        pessoa.nome +
        "! " +
        "Sua função aqui na empresa será " +
        pessoa.funcao);
}
console.log(onboarding02({ nome: "Lucas", funcao: "Desenvolvedor" }));
function onboarding03(pessoa) {
    return ("Seja bem-vindo " +
        pessoa.nome +
        "! " +
        "Sua função aqui na empresa será " +
        pessoa.funcao +
        " vc trabalhará com a linguagem " +
        pessoa.linguagem);
}
console.log(onboarding03({
    nome: "Lucas",
    funcao: "Desenvolvedor",
    linguagem: "TypeScript",
}));
function onboarding05(pessoa) {
    return ("Seja bem-vindo " +
        pessoa.nome +
        "! " +
        "Sua função aqui na empresa será " +
        pessoa.funcao +
        " vc trabalhará com a linguagem " +
        pessoa.linguagem +
        ". " +
        "Seu e-mail será " +
        pessoa.email);
}
console.log(onboarding05({
    nome: "Lucas",
    funcao: "Desenvolvedor",
    linguagem: "TypeScript",
    email: "lucas_55i@outlook.com",
}));
const filha = {
    nome: "Lucas",
    sobrenome: "Silva",
    idade: 21,
};
console.log(filha);
const usuario = {
    nome: "Lucas",
    email: "Lucas_55i@outlook.com",
};
const admin = {
    nome: "Lucas",
    email: "Lucas_55i@outlook.com",
    admin: true,
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
// function acessarSistema(usuario: Usuario):Usuario{
//   return usuario
// }
// console.log(acessarSistema(usuario));
