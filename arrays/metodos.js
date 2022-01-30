"use strict";
// const produtos = [
//     { id: 1, categoria: "limpeza", name: "Amaciante" },
//     { id: 2, categoria: "limpeza", name: "Detergente" },
//     { id: 3, categoria: "alimento", name: "ovo" },
//     { id: 4, categoria: "alimento", name: "alface" },
//   ];
//   const isAlimento = (produto: { name: string; }) => produto.name === 'ovo';
//   const alimentos = produtos.filter(isAlimento)
//   console.log(alimentos);
//   // Método fiilter filtrar apartir de um parametro, é bom para uso de compração ou diferente.
//MAP
// let numeros: number[] = [1, 2, 3, 4];
// let duplicados:number[] =  numeros.map(x => x * 2)
// console.log(duplicados);
// MAP E FILTER
// const produtos = [
//     { id: 1, categoria: "limpeza", name: "Amaciante" },
//     { id: 2, categoria: "limpeza", name: "Detergente" },
//     { id: 3, categoria: "alimento", name: "ovo" },
//     { id: 4, categoria: "alimento", name: "alface" },
//   ];
// let idAlimentos = produtos.filter((p) => p.categoria === "alimento").map((p) => p.id)
// console.log(idAlimentos);
// REDUCE
const produtos = [
    { valor: 6.5, id: 1, categoria: "limpeza", name: "Amaciante" },
    { valor: 1.2, id: 2, categoria: "limpeza", name: "Detergente" },
    { valor: 6.9, id: 3, categoria: "alimento", name: "ovo" },
    { valor: 2.0, id: 4, categoria: "alimento", name: "alface" },
];
let total = produtos.reduce((acumulado, produto) => acumulado + produto.valor, 0);
console.log(total);
