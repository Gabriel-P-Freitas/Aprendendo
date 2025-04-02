class Guerreiro {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  lutar() {
    return `O guerreiro ${this.nome} com ${this.idade} anos está lutando!`;
  }
}

const guerreiro = new Guerreiro("Davi", 14);
console.log(guerreiro.lutar());

class Soldado extends Guerreiro {
  constructor(nome, idade, armamento) {
    super(nome, idade);
    this.armamento = armamento;
  }

  lutar() {
    return `${this.nome} com ${this.idade} anos está lutando em nome do DEUS VIVO contra Golias!`;
  }

  embate() {
    return `${this.nome} com sua ${this.armamento} derrubou Golias em nome do DEUS de Israel!`;
  }
}

const _soldado = new Soldado("Davi", 14, "Funda");

console.log(_soldado.lutar());
console.log(_soldado.embate());
