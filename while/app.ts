export { }
// ===> Exemplom01 - while
let contador = 0;
while (contador < 5) {
  //   console.log(contador);
  contador++;
}

// ===> Exemplom02
let numero = 1;
while (numero < 20) {
  if (numero % 5 == 0) {
    console.log(`O primeiro número multiplo de 5 entre 1 a 20 é...: ${numero}`);
    break;
  }
  numero++;
}
// ===> Exemplom03 - exemplo mais prático
let contadorUsuario = 0
const usuario: string[] = ['Lucas', 'Ana', 'Neguinho'];
while (usuario[contadorUsuario]) {
  console.log('Usuarios..: ', usuario[contadorUsuario]);
  contadorUsuario++;
}
// ===> Exemplom04 - do...while
