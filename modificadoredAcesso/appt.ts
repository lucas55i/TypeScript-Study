// 27/04/2022

export { }

// ===> Exemplo 01- Modificador: public
class Estudante {
    codigoEstudante: number;
    nomeEstudante: string
}
const estudante = new Estudante();
estudante.codigoEstudante = 55
estudante.nomeEstudante = 'Lucas da Silva Correa de Jesus'

// console.log(estudante.codigoEstudante);
// console.log(estudante.nomeEstudante);

// ===> Exemplo 02- Modificador: private

class Estudante_02 {
    codigoEstudante: number;
    nomeEstudante: string;
    private idade: number

    constructor(codigoEstudante: number, nomeEstudante: string, idade: number) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }

    retornarDadosEstudante() {
        return `
        Código do Estudante: ${this.codigoEstudante}.
        Nome do Estudante: ${this.nomeEstudante}.
        Idade do Estudante: ${this.idade}.
        `
    }
}

// const estudante2 = new Estudante_02(123123, 'lucas', 21);
// console.log(estudante2.retornarDadosEstudante());

// ===> Exemplo 03- Modificador: protected

class Estudante_03 {
    codigoEstudante: number;
    protected nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}

class Pessoa extends Estudante_03 {
    private curso: string;

    constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
        super(codigoEstudante, nomeEstudante)
        this.curso = curso;
    }

    retornarDadosEstudante() {
        return `
        Código do Estudante: ${this.codigoEstudante}.
        Nome do Estudante: ${this.nomeEstudante}.
        Curso do Estudante: ${this.curso}.
        `
    }
}
const estudante_03 = new Pessoa(123123, 'Lucas Silva', 'Algoritmos')
console.log(estudante_03.retornarDadosEstudante());




// ===> Exemplo 04- Modificador: readonly