function verificarPromocao(prato){  //Criação de função 1ue usa objetos como parâmetro
    console.log(`você selecionou o prato: ${prato.nome}`);
    if(prato.preco > 35){           //utilização de IF para verificação de condição de possível desconto.

        console.log('Participa da promoção de delivery grátis!')
    }else{

        console.log('Não participa da promoção vegana. O produto selecionado tem valor menor que R$35.00')
    }
    console.log(`Valor do prato selecionado ${prato.preco}`);
    console.log(`Prato vegano: ${prato.vegano ? 'Participa  da promoção especial vegana' : 'Esse prato não é uma opção vegana' }`); //Utilização de operador ternário para verificação de um boolean, evitando uso de if para um código menor
}

let pratos = {
    nome: 'pizza',   //Criação de objeto
    preco: 40,
    vegano: false
}

verificarPromocao(pratos);     //comando para chamada de função



