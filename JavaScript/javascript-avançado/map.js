const usuarios = [
  {
    nome: "John",
    idade: 30,
  },
  {
    nome: "Doe",
    idade: 40,
  },
];

const usuariosMap = usuarios.map((item) => {
  return { ...item, idade: item.idade * 2 };
});

console.log(usuariosMap);

// 1. Crie uma lista que contenha todos os valores da lista números multiplicados por 2.

const numeros = [10, 20, 90, 50];
const numerosMultipliedByTwo = numeros.map((item) => item * 2);
console.log(numerosMultipliedByTwo);

// 2. Crie uma lista usando o map, baseando-se na lista usuarios, que contenha a idade de cada usuário multiplicada por 2, mantendo o restante do objeto.

const users = [
  { nome: "Gabriel", idade: 20 },
  { nome: "Miguel", idade: 27 },
  { nome: "Rafael", idade: 18 },
];
const usersAgeMultipliedByTwo = users.map((item) => {
  return { ...item, idade: item.idade * 2 };
});
console.log(usersAgeMultipliedByTwo);

// 3. Crie uma lista de strings baseando-se na lista pessoas, que diga se a pessoa
// pode ou não ir para a matrix. Para ir, ela precisa ter uma idade maior do que 18.

const pessoas = [
  { nome: "Angelina Jolie", idade: 80 },
  { nome: "Eric Jones", idade: 2 },
  { nome: "Paris", idade: 15 },
  { nome: "Kenny", idade: 16 },
  { nome: "Bob", idade: 100 },
];

const pessoaGetAge = pessoas.map((item) => {
  if (item.idade >= 18) {
    return `${item.nome} tem mais que 18 anos e pode ir a matrix`;
  } else {
    return `${item.nome} NÃO pode entrar na matrix`;
  }
});
console.log(pessoaGetAge);

// Desafio: Você tem uma lista de objetos que representam pessoas, e cada objeto
// contém o nome e a idade da pessoa. Seu desafio é criar uma nova lista que
// formate os nomes dessas pessoas em um estilo específico: cada nome deve ser
// capitalizado(ou seja, a primeira letra de cada parte do nome deve
// ser maiúscula) e deve incluir a idade da pessoa.

const peoples = [
  { nome: "maria da silva", idade: 30 },
  { nome: "joão pereira", idade: 25 },
  { nome: "ana clara", idade: 22 },
  { nome: "pedro alves", idade: 40 },
];

const peoplesCaptalize = peoples.map((item) => {
  const nameCapitalized = item.nome
    .split(" ")
    .map((part) => {
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");

  return { ...item, nome: nameCapitalized };
});

console.log(peoplesCaptalize);
