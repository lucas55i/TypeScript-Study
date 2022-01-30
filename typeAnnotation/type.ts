// tipo da variavel string, boolean, number, object
// let nomeVariavel: typeAnnotation = valor

// function addNUmeros(num1: number, num2: number) {
//     return num1 + num2;
// }


//Variaveis
let nome: string = "lucas"
console.log(nome)

//arrays
let animais: string[] = ["ELefante", 'cachorro', 'peixe']
console.log(animais)

//objects
let carro: {
    nome: string;
    ano: number;
    preco: number
};

carro = { nome: 'Corola', ano: 2019, preco: 80.000 }
console.log(carro)


//functions

function multiply(num1: number, num2: number) {
    return num1 * num2
}

console.log(multiply(2, 2))