// Metodos sao funçoes que estao dentro de objetos.

let prato = {
  nome: 'Pizza',
  preco: 40,
  vegano: false,
  mostrarResumo: function() {
    console.log(`Prato: ${this.nome} - R$${this.preco}`);
    console.log(this.vegano ? '✅ Vegano' : '❌ Não vegano');
  }
};

prato.mostrarResumo(); // chama o método interno
