// ===> Exemplo 01: loop for
for (let i = 0; i < 10; i++) {
//   console.log(i);
}

// ===> Exemplo 02: for  ...or - (retorna uma coleção de matriz, lista ou tupla)
const arrayNumeros = [10, 20, 30, 40, 50];
let arrOj = Object.keys(arrayNumeros)

for (const i of arrayNumeros) {
    // console.log(i);
}

// ===> Exemplo 03: loop ...in - ()
const arrayNumeros01= [5, 4, 3, 2, 1, 0]
for (const i in arrayNumeros01) {
   console.log(i);
}
//sort()
const ordem: number[] = arrayNumeros01.sort()
console.log(ordem);
