// ===> Exemplo 01 -Uso do Switch...case
let flor: string = "tulipa";

switch (flor) {
  case "rosa":
    console.log("Rosas são vermelhas");
    break;
  case "violeta":
    console.log("Violetas são azuis");
    break;
  case "tulipa":
    console.log("Tulipas são brancas");
    break;

  default:
    console.log("Por favorm selecione uma outa flor!");
}

// ===> Exemplo 02 -Uso do Switch...case
let diaUtilSemana: number = 1;

switch (diaUtilSemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("SEGUNDA");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  case 4:
    console.log("Quinta");
    break;
  case 5:
    console.log("Sexta");
    break;

  default:
    console.log("Não é um dia Utíl!");
}
