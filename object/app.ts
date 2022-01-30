export {};
// ===> Exemplo 01 -  Exemplo básico do uso do Type Object
const pessoa = {
  nome: "Lucas",
  sobrenome: "Jesus",
  idade: 21,
  funcao: "Desenvolvedor FullStack JR.",
};
console.log(pessoa);

// ===> Exemplo 02 -  object como parametros de função
function onboarding01(funcionario: { nome: string }) {
  return "Seja Bem-vindo: " + funcionario.nome;
}
console.log(onboarding01({ nome: "Lucas" }));
// ===> Exemplo 03 -  object nomeados
interface Pessoa {
  nome: string;
  funcao: string;
}

function onboarding02(pessoa: Pessoa) {
  return (
    "Seja bem-vindo " +
    pessoa.nome +
    "! " +
    "Sua função aqui na empresa será " +
    pessoa.funcao
  );
}
console.log(onboarding02({ nome: "Lucas", funcao: "Desenvolvedor" }));

// ===> Exemplo 04 -  object como type alias
type Pessoa04 = {
  nome: string;
  funcao: string;
  linguagem: string;
};

function onboarding03(pessoa: Pessoa04) {
  return (
    "Seja bem-vindo " +
    pessoa.nome +
    "! " +
    "Sua função aqui na empresa será " +
    pessoa.funcao +
    " vc trabalhará com a linguagem " +
    pessoa.linguagem
  );
}
console.log(
  onboarding03({
    nome: "Lucas",
    funcao: "Desenvolvedor",
    linguagem: "TypeScript",
  })
);

// ===> Exemplo 05 -  usando optional no object
// interface Pessoa05 {
//     nome: string,
//     funcao: string,
//     linguagem: string,
//     email?: string,
// }
// function onboarding04(pessoa: Pessoa05) {
//     return (
//       "Seja bem-vindo " +
//       pessoa.nome +
//       "! " +
//       "Sua função aqui na empresa será " +
//       pessoa.funcao +
//       " vc trabalhará com a linguagem " +
//       pessoa.linguagem
//     );
//   }
//   console.log(
//     onboarding04({
//       nome: "Lucas",
//       funcao: "Desenvolvedor",
//       linguagem: "TypeScript",
//     })
//   );

// ===> Exemplo 06 -  Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto)
interface Pessoa05 {
  nome: string;
  funcao: string;
  linguagem: string;
  readonly email: string;
}
function onboarding05(pessoa: Pessoa05): string {
  return (
    "Seja bem-vindo " +
    pessoa.nome +
    "! " +
    "Sua função aqui na empresa será " +
    pessoa.funcao +
    " vc trabalhará com a linguagem " +
    pessoa.linguagem +
    ". " +
    "Seu e-mail será " +
    pessoa.email
  );
}
console.log(
  onboarding05({
    nome: "Lucas",
    funcao: "Desenvolvedor",
    linguagem: "TypeScript",
    email: "lucas_55i@outlook.com",
  })
);

// ===> Exemplo 07 -  Tipos de extensõs (heranças)
interface Mae {
  nome: string;
}
interface Pai {
  sobrenome: string;
}
interface Filha extends Mae, Pai {
  idade: number;
}

const filha: Filha = {
  nome: "Lucas",
  sobrenome: "Silva",
  idade: 21,
};
console.log(filha);

// ===> Exemplo 08 -  Tipos de Interseções
interface cachorro {
  tipo: string;
}

interface gato {
  tipo: string;
}

type Animal = cachorro & gato;
// ===> Exemplo 09 -  Generic Object

type Usuario = {
  nome: string;
  email: string;
};
type Admin = {
  nome: string;
  email: string;
  admin: true;
};
const usuario: Usuario = {
  nome: "Lucas",
  email: "Lucas_55i@outlook.com",
};
const admin: Admin = {
  nome: "Lucas",
  email: "Lucas_55i@outlook.com",
  admin: true,
};

function acessarSistema<T>(usuario: T): T {
  return usuario;
}
console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));

// function acessarSistema(usuario: Usuario):Usuario{
//   return usuario
// }
// console.log(acessarSistema(usuario));
