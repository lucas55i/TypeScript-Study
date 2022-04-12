// data: 11/04/2022

export { }
// ===> Exemplo 01
function somarNumeros(...numeros: number[]) {
    let total = 0
    numeros.forEach((numero) => (total += numero))
    return total
}

// console.log(somarNumeros(30, 50));
// console.log(somarNumeros(70, 30, 50, 30, 20));


// ===> Exemplo 02
function listarFrutas(frase: string, ...frutas: string[]) {
    return frase + ' ' + frutas.join(', ')
}
// console.log(
//     listarFrutas(
//         'Lucas, voce precisa ir na feira e comprar...: ',
//         "🍍", "🍊", "🍎", "🍉", "🥭"
//     )
// )


// ===> Exemplo 04

class Produtos {
    public exibirProdutos(...produtos: string[]): void {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}

const departmentoInformatica: Produtos = new Produtos();
console.log(
    `Todos os produtos do departamento de informatica disponiveis no estoque....`
)
departmentoInformatica.exibirProdutos(
    'Mouser',
    'Monitor',
    'Celular'
)