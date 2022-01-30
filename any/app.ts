// tipo any
const a: any = 888;
const b: any = ["lucas"];

const result = a + b;
// console.log(result);

// quando o tipo 'any' é inferido implícitamente
let frase;
frase = "Oi lucas";
//  console.log(frase);

// Quando devemos usar o tipo any?
const formulario: { [compoFormulario: string]: any } = {
    nome:'Lucas',
    sobreNome: 'Jesus',
    idade: 21
};
console.log(formulario);
