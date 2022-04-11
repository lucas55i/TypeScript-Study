"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ===> Exemplo 01 - Uso do if
const numeroMax = 100;
let contador = 100;
if (contador < numeroMax) {
    contador++;
}
// console.log(contador);
// ===> Exemplo 02 - Uso do if
const permissaoIdadeDirigir = 18;
// if(permissaoIdadeDirigir >= 18){
//     console.log('Voce habilitado a dirigir!');
// }
// ===> Exemplo 03 - Uso do if-else
const permissaoIdadeDirigir01 = 18;
if (permissaoIdadeDirigir01 <= 17) {
    console.log("Voce habilitado a dirigir!");
}
else {
    console.log("Voce não está habilitado a dirigir");
}
// ===> Exemplo 04 - Uso do if... else if
let desconto;
let itemContador = 14;
if (itemContador > 0 && itemContador <= 5) {
    desconto = 5;
    console.log("Voce teve um desconto de...: ", desconto);
}
else if (itemContador > 5 && itemContador <= 10) {
    desconto = 10;
}
else {
    desconto = 15;
}
// console.log('Voce teve um desconto de...: ', desconto);
// ===> Exemplo 05 - Ternário (? :) - if... else
const idadeVotacao = 18;
// if(idadeVotacao > 18){
//     console.log('Voce é elegível para votar.');
// }else{
//     console.log('Voce não é elegível para votar.');
// }
// ===> Ternário
const podeVotar = (idadeVotacao > 18)
    ? "Voce é elegivel para votar.."
    : "Voce não é elegivel para votar";
console.log(podeVotar);
