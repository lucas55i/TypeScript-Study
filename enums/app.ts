// numeric enums
enum Idioma {
  Portugues,
  Espanhol,
  Ingles,
  Alemão,
}
// console.log(Idioma);

// string enums
enum Dia {
  Segunda = "SEG",
  Terca = "TER",
  Quarta = "QUA",
  Quinta = "QUI",
  Sexta = "SEX",
  Sabado = "SAB",
  Domingo = "DOM",
}
// console.log(Dia.Segunda);

// acessando os valores de um enum
const enum Comida {
  Hamburger,
  Massa,
  Pizza,
  Bolacha,
}

function comida(c: Comida) {
  return "Comidas muito boas";
}

// console.log(comida(Comida.Hamburger));

// quando usar enum?
enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa ={
    id: 1,
    status: Tarefa.Done,
    description: 'Parabéns! Tarefa concluida com sucesso!'
};

if(concluidaTarefa.status == Tarefa.Done){
    console.log('Enviar Email: Tarefa concluida!');
}
