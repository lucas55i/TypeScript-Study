"use strict";
//uso de colchetes
let frutas = ["🍍", "🍊", "🍎", "🍉", "🥭"];
// console.log(frutas[2]);
//array object
let frutas1 = ["🍍", "🍊", "🍎", "🍉", "🥭"];
// console.log(frutas1[3]);
//adicionando mais strings com método 'push'
let idiomas = ["Português", "Inglês", "Espanhol", "Francês"];
console.log(idiomas);
idiomas.push("Mandarim");
console.log(idiomas);
idiomas.push("Italiano");
console.log(idiomas);
//Indentificando o tamanhao do array 'length'
let idiomas1 = ["Português", "Inglês", "Espanhol", "Francês"];
console.log(idiomas1.length);
//array com spread operator
let listanumeros = [0, 1, 2, 3, 4, 5, 6];
listanumeros = [...listanumeros, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(listanumeros);
//laço de iteração
let linguagensArray = ["Node", "Python", "PHP", "COBOL"];
function funcaoLInguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLInguagens(linguagensArray);
