// Metodos sao funçoes que estao dentro de objetos.

let cliente = {
    nome: 'Lucas',
    idade: 27,
    temCartaoFidelidade: true,
    favoritos:  ['Picanha', 'Pure de batata'],
    mostrarResumo: function(){
        console.log(`Cliente ${this.nome} - ${this.idade} anos`)
        console.log(`Cartao fidelidade: ${this.temCartaoFidelidade ? 'Sim' : 'Nao'}`)
        console.log(`Pratos favoritos: ${this.favoritos.join('-')}`)
    }
}
cliente.mostrarResumo();


/*
Desafio do Dia 16
Crie um objeto chamado cliente com:

nome

idade

temCartaoFidelidade

favoritos (array com 2 pratos)

método chamado mostrarResumo() que exibe:
Cliente: Lucas (27 anos)
Cartão fidelidade: Sim
Pratos favoritos: Bife Acebolado, Hamburguer

*/