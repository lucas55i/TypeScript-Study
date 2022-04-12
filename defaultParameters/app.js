"use strict";
// data: 10/04/22
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Exemplo 01 - Default Parameters
function descontoCompra(preco, desconto = 0.08) {
    return preco * (1 - desconto);
}
// console.log(descontoCompra(100))
// ===> Exemplo 02
function exibirMensagem(mensagem, saudar = 'Fala pessoal!') {
    return saudar + ' ' + mensagem + '!';
}
// console.log(exibirMensagem('Javascript'))
// ===> Exemplo 03 
function mutiplicaArray(numero, array = [10, 20, 30, 40, 50]) {
    let multiplicados = array.map(n => n * numero);
    return multiplicados;
}
console.log(mutiplicaArray(4));
