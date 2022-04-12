// data: 10/04/22

export { }


// ===> Exemplo 01 - Default Parameters
function descontoCompra(preco: number, desconto = 0.08) {
    return preco * (1 - desconto);
}

// console.log(descontoCompra(100))

// ===> Exemplo 02
function exibirMensagem(mensagem: string, saudar = 'Fala pessoal!') {
    return saudar + ' ' + mensagem + '!';
}
// console.log(exibirMensagem('Javascript'))

// ===> Exemplo 03 
function mutiplicaArray(numero: number, array = [10, 20, 30, 40, 50]) {
    let multiplicados: number[] = array.map(n => n * numero)
    return multiplicados
}
console.log(mutiplicaArray(4))