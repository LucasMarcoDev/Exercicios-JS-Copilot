function Pedido(nome, preco, prato,cartao){
    this.nome = nome;
    this.preco = preco;
    this.prato = prato;
    this.cartao = cartao;
    this.mostraMais = function(){
       
        
        console.log(`Cliente: ${nome}`)
        console.log(`Prato: ${prato}`)
        console.log(`Prato: ${preco}`)
        console.log(`Cartao ${cartao ? 'pagamento com cartao' : 'Pagamento no dinheiro'}`)
       
    };

}

let pedido1 = new Pedido('Lucas', 'Feijoada', 80, true)
pedido1.mostraMais()

let pedido2 = new Pedido('Renata', 'Pizza', 76, false)
pedido2.mostraMais()