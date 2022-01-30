// uso simples de tuplas em typescript --- segue um padrão em ordem
let pessoa: [string, string, number];
pessoa = ["lucas silva", "estagiario", 21];

// Acessando o valor da tuplas
let pessoa1: [string, string, number];
pessoa1 = ["lucas silva", "estagiario", 21];
// console.log(pessoa1[1]);

// Outra forma de usar tuplas em typescript (com labels)
// let pessoa2: [nome: string, cargo: string, idade: number] = [
//   "lucas silva",
//   "estagiario",
//   21,
// ];
// pessoa2 = ["lucas silva", "estagiario", 21];
// console.log(pessoa2);

// usando tuplas com spread operator
let listasFrutas: [string, ...string[]] = ["🍍", "🍊", "🍎", "🍉", "🥭"];
// console.log(...listasFrutas);

// listas heterogenea de tuplas
let listasFruta2: [number, boolean, ...string[]] = [5, true, ...listasFrutas];
// console.log(listasFruta2);

// usao de função com tuplas
function listarPessoas(nomes: string[], idade: number[]) {
  return [...nomes, ...idade];
}

let resultado = listarPessoas(["lucas", "negão"], [21, 22]);
// console.log(resultado);

// labeled tuples com spread operator numa função
// type Nome =
//   | [primeiroNome: string, sobreNome: string]
//   | [primeiroNome: string, nomeMeio: string, sobreNome: string];

// function criarPessoa(...nome: Nome) {
//   return [...nome];
// }
// console.log(criarPessoa('lucas', 'silva'));