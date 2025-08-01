let prato = 'hamburger'.toLocaleLowerCase();

switch (prato){
    case 'hamburger':
        console.log('Você pediu um hamburguer. Preço: R$25,00');
        break;
    case 'pizza':
        console.log('Pizza saindo do forno! Preço R$40');
        break;
    case 'sushi':
        console.log('Sushi saindo do forno! Preço:R$50');
        break;
    case 'salada':
        console.log('Opção saudável! Preço R$20');
        break;
        default:
        console.log('Desculpe, não temos esse prato no cardápio');
}



//Cardápio Inteligente com Switch Case

/*
Você vai simular um sistema onde o cliente escolhe um prato digitando o nome, e o sistema responde com uma mensagem personalizada e o preço.

🎯 Regras do desafio
Crie uma variável chamada pedido com o nome do prato (ex: "hamburguer")

Use switch para verificar qual prato foi pedido:

"hamburguer" → "Você pediu um hamburguer. Preço: R$25"

"pizza" → "Pizza saindo do forno! Preço: R$40"

"sushi" → "Sushi fresquinho chegando! Preço: R$50"

"salada" → "Opção saudável! Preço: R$20"

Use default para:

Mostrar: "Desculpe, não temos esse prato no cardápio."

Faça o sistema funcionar com qualquer valor da variável, e responda com elegância
*/