let prato = {
    nome: 'Lasanha',
    ingredientes: ['massa', 'molho', 'carne moida'],
    preco: 28,
    mostraPrato: function(){
        console.log(`Prato selecionado:  ${prato.nome}`)
        console.log(prato.preco >30 ? 'Ganhou desconto' : 'Nao ganhou desconto')

    }
}

prato.mostraPrato()

/*
Exercicio de treinamento de metodos. Esses que sao funçoes dentro de objetos podemos.
*/