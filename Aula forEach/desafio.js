function Prato(nome, preco, vegano){
    this.nome = nome;
    this.preco = preco;
    this.vegano = vegano;
    this.mostrarDetalhes = function(){
        console.log(`Prato: ${this.nome}`)
        console.log(`Preco: ${this.preco.toFixed(2)}`)
        console.log(`Vegano: ${this.vegano ? 'sim' : 'nao'}`)
        if(this.vegano === true && this.preco < 30){
            console.log('Este prato participa da promoçao vegana economica')
        }else{
            console.log('')
        }
            
    }
}

let cardapio = [new Prato('Lasanha', 40, false), new Prato('Feijoada', 60, false), new Prato('Tofu', 27.50, true)]

cardapio.forEach(function(cardapio){
    cardapio.mostrarDetalhes()
    
        
    
})

/*

Use forEach() para percorrer o cardapio e chamar mostrarDetalhes() para cada prato

✨ Bônus opcional:
Dentro do método mostrarDetalhes(), se o prato for vegano e custar menos de R$30, exiba:

“🌱 Este prato participa da promoção vegana econômica!”

💡 Dica:
Você pode usar:if (this.vegano && this.preco < 30) {
  console.log("🌱 Este prato participa da promoção vegana econômica!");
}



*/
