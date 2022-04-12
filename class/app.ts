// data: 11/04/2022

export { }
// ===> Exemplo 01 Classes
class Pessoa {
    nome: string
    sobreNome: string

    constructor(nome: string, sobreNome: string) {
        this.nome = nome
        this.sobreNome = sobreNome
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobreNome}`
    }
}

const pessoa = new Pessoa('Lucas', 'Jesus');
// console.log(pessoa.nomeCompleto());

// ===> Exemplo 02 Classes (sem construtor)
class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
}

// Criar um objeto ou a instancia
const estudante = new Estudante();

// Inicializar o objeto:
estudante.codigoEstudante = 1234
estudante.nomeEstudante = 'Ramon'

// Acessar os campos
console.log(`Código do estudante....: ${estudante.codigoEstudante}`)
console.log(`Nome do estudante....: ${estudante.nomeEstudante}`)








