let precos = [50, 25, 39]
let produtos = ['Fone de ouvido', 'Caxo de banana', 'Monitor 12 polegadas']
let somaTotal = 0;

for(let i = 0; i < produtos.length; i++ ){
    console.log(produtos[i], `Custa  R$ ${precos[i]}`)
   somaTotal =+ precos[i];    
}

console.log(`Soma total da compra R$ ${somaTotal}`)

 if(somaTotal>= 100){
        console.log('Você recebeu frete grátis')
    }else{
        console.log('Frete de 20 R$ será adicionado ao carrinho ')
    }

/*
  
Estrutura do desafio:
Crie dois arrays:

produtos → com nomes de 3 itens

precos → com o preço de cada item (mesma ordem!)

Use um for para:

Mostrar cada produto com seu preço

Somar todos os preços e guardar em total

Use uma condição if para:

Se total >= 100, mostrar: "Você ganhou frete grátis!"

Se não, mostrar: "Frete de R$ 20 será adicionado."
Desafio Bônus: Simulador de Carrinho com Preços
Você vai montar um sistema que:

Guarda uma lista de produtos e preços

Mostra todos os produtos com um loop

Calcula o valor total da compra usando um for

Dá frete grátis se o total for maior que R$ 100


*/