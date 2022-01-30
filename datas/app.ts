// let data = new Date();
function formatDate(date: Date): string {
  let newDate = new Date(date);

  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
}
// console.log(formatDate(data))

// let diaAtual = new Date();
// let dataPassada = new Date(2021, 8, 2);

// let dataEmMilissegundos = Math.abs(diaAtual.getTime() - dataPassada.getTime());
// let diasDiferença = Math.ceil(dataEmMilissegundos / ( 1000 * 60 * 60 * 24))
// console.log(`A diferença de dias é de ${diasDiferença}`);


// pegar primeiro e ultimo dia do mes
let data  = new Date();


let primeiroDia = new Date(data.getFullYear(), data.getMonth(), 1)
let ultimoDia = new Date(data.getFullYear(), data.getMonth() + 1, 0)

console.log(formatDate(primeiroDia), formatDate(ultimoDia));



