function somar(A, B) {
  return A + B;
}
const arrowSoma = (a, b) => a + b;
console.log(somar(3, 4));
console.log(arrowSoma(3, 4));

function verificarNegativo(numero) {
  return numero < 0;
}
const verificarNegativoArrow = (numero) => numero < 0;
console.log(verificarNegativoArrow(5));

function criarUsuario(nome, idade) {
  return { nome: nome, idade: idade };
}
const criarUsuarioArrow = (nome, idade) => ({ nome: nome, idade: idade });
console.log(criarUsuarioArrow("Gabriel", 19));

setTimeout(function () {
  console.log("Function Executando após 2 segundos");
}, 2000);
setTimeout(
  () => console.log("Arrow Function Executando após 2 segundos"),
  2000
);
