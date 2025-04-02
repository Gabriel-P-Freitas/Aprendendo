// // Como assinalar uma variável para cada valor na lista Números?

// const [primeiro, segundo, terceiro, quarto, quinto] = [100, 200, 300, 400, 500];
// console.log(primeiro);

// // Como inverter os valores das variáveis A e B?

// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(` Valor a: ${a} \n Valor b: ${b}`);

// // Como criar uma nova lista de melhores séries do mundo e adicionar dois novos valores utilizando o Spread Operator?

// const melhoresSeriesDoMundo = ["The Chosen", "The Chosen 2", "The Chosen 3"];

// const melhoresSeriesDoMundo2 = [
//   ...melhoresSeriesDoMundo,
//   "The Chosen 4",
//   "The Chosen 5",
// ];

// console.log(melhoresSeriesDoMundo2);

// // Como assinalar os dois primeiros valores da lista Sobremesas a duas variáveis e o restante em uma variável usando o Spread Operator?

// const sobremesas = [
//   "Sorvete",
//   "Petit Gateau",
//   "Açai",
//   "Pudim",
//   "Mouse de Maracujá",
// ];

// const [primeira, segunda, ...resto] = sobremesas;

// console.log(
//   `Em primeiro lugar: ${primeira} \n
//     Em segundo lugar: ${segunda} \n
//     Por fim temos: ${resto}`
// );

// // Desafio: Gerenciando uma Lista de Estudantes

// const estudantes = [
//   { nome: "Alice", idade: 20, notas: [8, 9, 10] },
//   { nome: "Bruno", idade: 22, notas: [7, 6, 8] },
//   { nome: "Carla", idade: 21, notas: [9, 10, 9] },
// ];

// const [estudanteUm, estudanteDois, estudanteTres] = estudantes;

// const mediaEstudanteUm =
//   estudanteUm.notas.reduce(
//     (acumulator, currentValue) => acumulator + currentValue
//   ) / estudanteUm.notas.length;

// const mediaEstudanteDois =
//   estudanteDois.notas.reduce(
//     (acumulator, currentValue) => acumulator + currentValue
//   ) / estudanteDois.notas.length;

// const mediaEstudanteTres =
//   estudanteTres.notas.reduce(
//     (acumulator, currentValue) => acumulator + currentValue
//   ) / estudanteTres.notas.length;

// console.log(
//   `A média da nota do estudante 1 é: ${mediaEstudanteUm} \n
// A média da nota do estudante 2 é: ${mediaEstudanteDois} \n
// A média da nota do estudante 3 é: ${mediaEstudanteTres} \n`
// );

// const estudantesComMedia = estudantes.map((estudante) => {
//   return;
// });

// console.log(estudantesComMedia);

// SPREAD OPERATORS E DESTRUCTURING EM OBJETOS:

// 1. Acesse as propriedades tamanho da barba, idade e família do objeto viking por meio do
// Destructuring e logue-as no console.

// const viking = {
//   tamanhoDaBarba: "enorme",
//   idade: 30,
//   familia: "Lost Brook",
// };

// const { tamanhoDaBarba, idade, familia } = viking;

// console.log(tamanhoDaBarba);

// 2. Acesse as propriedades name e age do objeto usuário por meio do Destructuring e
// renomeie-as para nome e idade, respectivamente. Depois, logue-as no console.

// const usuario = {
//   name: "Jane",
//   age: 28,
// };

// const { name: nome, age: idade } = usuario;

// console.log(idade);

// Acesse todas as propriedades dentro dos objetos dados pessoais e dados profissionais do
// objeto piloto. Logue nome, idade, categoria e conquistas no console.

// const piloto = {
//   dadosPessoais: {
//     nome: "Ayrton Senna",
//     idade: 34,
//   },
//   dadosProfissionais: {
//     categoria: "Fórmula 1",
//     conquistas: "O melhor de todos os tempos",
//   },
// };

// const [{ nome, idade }, { categoria, conquistas }] = [
//   piloto.dadosPessoais,
//   piloto.dadosProfissionais,
// ];

// console.log(nome);
// console.log(idade);
// console.log(categoria);
// console.log(conquistas);

// 4. Assinale as propriedades A e B deste objeto a duas variáveis e distribua as restantes
// (C e D) a uma variável só por meio do Spread Operator.

const objeto = {
  A: 10,
  B: 20,
  C: 30,
  D: 40,
};

const { A, B, ...restante } = objeto;

console.log(restante);
console.log(A);
console.log(B);
