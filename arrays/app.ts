//uso de colchetes
let frutas: string[] = ["🍍", "🍊", "🍎", "🍉", "🥭"];
// console.log(frutas[2]);

//array object
let frutas1: Array<string> = ["🍍", "🍊", "🍎", "🍉", "🥭"];
// console.log(frutas1[3]);

//adicionando mais strings com método 'push'
let idiomas: Array<string> = ["Português", "Inglês", "Espanhol", "Francês"];
console.log(idiomas);
idiomas.push("Mandarim");
console.log(idiomas);
idiomas.push("Italiano");
console.log(idiomas);

//Indentificando o tamanhao do array 'length'
let idiomas1: Array<string> = ["Português", "Inglês", "Espanhol", "Francês"];
console.log(idiomas1.length);

//array com spread operator
let listanumeros = [0, 1, 2, 3, 4, 5, 6];
listanumeros = [...listanumeros, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(listanumeros);

//laço de iteração
let linguagensArray: Array<string> = ["Node", "Python", "PHP", "COBOL"];

function funcaoLInguagens(linguagens: string[]) {
  for (let i = 0; i < linguagens.length; i++) {
    console.log(linguagensArray[i]);
  }
}
funcaoLInguagens(linguagensArray)
