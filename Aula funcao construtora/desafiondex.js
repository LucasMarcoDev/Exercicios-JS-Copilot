
function Prato(nome, preco, vegano){

    this.nome = nome;
    this.preco = preco;
    this.vegano = vegano;
    this.mostrarDetalhes=function(){
        console.log(`prato: ${this.nome}`);
        console.log(`preço: ${this.preco}`);
        console.log(`Vegano: ${this.vegano ? 'sim' : 'nao'}`)
    }
}

let prato1 = new Prato('Lucas', 40 ,false)
prato1.mostrarDetalhes()

let prato2 = new Prato('Renata', 50, true)
prato2.mostrarDetalhes()