"use strict";
// numeric enums
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Alem\u00E3o"] = 3] = "Alem\u00E3o";
})(Idioma || (Idioma = {}));
// console.log(Idioma);
// string enums
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
function comida(c) {
    return "Comidas muito boas";
}
// console.log(comida(Comida.Hamburger));
// quando usar enum?
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    description: 'Parabéns! Tarefa concluida com sucesso!'
};
if (concluidaTarefa.status == Tarefa.Done) {
    console.log('Enviar Email: Tarefa concluida!');
}
