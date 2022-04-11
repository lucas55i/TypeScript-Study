// data: 10/04/2022
export { }
// ===> Exemplo 01 - Functions (Named Function)
function somarNumeros(num1: number, num2: number): number { return num1 + num2 }
const resultado = somarNumeros(2, 5)
// console.log(resultado)


// ===> Exemplo 02 - Função Anonima (Function Expression)
const saudar = function (mensagem: string) { return mensagem; };

// console.log(saudar('lucas'))
// ===> Exemplo 03 - Functions (Arrow Function Expression)
const saudar_03 = (mensagem: string) => { return mensagem; };
// console.log(saudar_03('lucas22'))


// ===> Exemplo 03 - (Function Constructor)
const saudar_04 = new Function('mensagem', 'return "fala "  + mensagem')
console.log(saudar_04('lucas'))