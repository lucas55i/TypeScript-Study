"use strict";
// data: 11/04/2022
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Exemplo 01
function somarNumeros(...numeros) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));
    return total;
}
// console.log(somarNumeros(30, 50));
// console.log(somarNumeros(70, 30, 50, 30, 20));
// ===> Exemplo 02
function listarFrutas(frase, ...frutas) {
    return frase + ' ' + frutas.join(', ');
}
// console.log(
//     listarFrutas(
//         'Lucas, voce precisa ir na feira e comprar...: ',
//         "🍍", "🍊", "🍎", "🍉", "🥭"
//     )
// )
// ===> Exemplo 04
class Produtos {
    exibirProdutos(...produtos) {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}
const departmentoInformatica = new Produtos();
console.log(`Todos os produtos do departamento de informatica disponiveis no estoque....`);
departmentoInformatica.exibirProdutos('Mouser', 'Monitor', 'Celular');
