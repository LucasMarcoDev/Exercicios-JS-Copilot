let pessoas = {
    nome:'Lucas',
    cFidelidade: true,
    preco: 100,
    
    calcularDesconto: function(){
        switch(this.cFidelidade){
            case true:
                let desconto = this.preco * 0.10;
        let valorFinal = this.preco - desconto;
                 console.log(`Cliente ${this.nome} tem cartao fidelidade`)
                 console.log(`Valor original: ${this.preco.toFixed(2)}`)
                 console.log(`Desconto aplicado ${desconto.toFixed(2)}`)
                 console.log(`Valor final: R$${valorFinal.toFixed(2)}`);
                 break;
            case false:
                console.log(`Cliente ${this.nome} nao tem cartao fidelidade`)
                console.log(`Valor final: ${this.preco.toFixed(2)}`)
        }
       
    },

}

pessoas.calcularDesconto();

/*
console.log(`Valor final` + ` ${this.preco - this.desconto} `)
desconto: (10/100) * 100,
Desafio Bônus — Cliente com Método de Desconto
🧱 Objetivo:
Você vai criar um objeto cliente com um método chamado calcularDesconto() que:

Verifica se o cliente tem cartão fidelidade

Aplica 10% de desconto se tiver

Exibe o valor final da compra com ou sem desconto


Resultado esperado:
Se tiver cartão:
Cliente Lucas tem cartão fidelidade.
Valor original: R$120.00
Desconto aplicado: R$12.00
Valor final: R$108.00


*/