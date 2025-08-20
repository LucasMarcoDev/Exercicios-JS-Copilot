/*
Funçao construtora e um tipo de funçao que nos permite criar varios moldes
usando a mesma estrutura com dados diferentes
*/

function Cliente(nome, idade, temCartaoFidelidade) {
  this.nome = nome;
  this.idade = idade;
  this.temCartaoFidelidade = temCartaoFidelidade;
  this.mostrarResumo = function() {
    console.log(`Cliente: ${this.nome} (${this.idade} anos)`);
    console.log(`Cartão fidelidade: ${this.temCartaoFidelidade ? 'Sim' : 'Não'}`);
  };
}
let cliente1 = new Cliente('Lucas', 27, true);
cliente1.mostrarResumo();
