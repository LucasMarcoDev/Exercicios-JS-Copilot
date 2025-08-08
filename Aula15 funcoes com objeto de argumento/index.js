function verificarPromocao(prato){
    console.log(`você selecionou o prato: ${prato.nome}`);
    if(prato.preco > 35){

        console.log('Participa da promoção de delivery grátis!')
    }else{

        console.log('Não participa da promoção vegana. O produto selecionado tem valor menor que R$35.00')
    }
    console.log(`Valor do prato selecionado ${prato.preco}`);
    console.log(`Prato vegano: ${prato.vegano ? 'Participa  da promoção especial vegana' : 'Esse prato não é uma opção vegana' }`);
}

let pratos = {
    nome: 'pizza',
    preco: 40,
    vegano: false
}

verificarPromocao(pratos);



/*
O nome do prato
O preço
Se for vegano, diga: “✅ Participa da promoção especial vegana!”

Se custar acima de 35, diga: “🎁 Participa da promoção de delivery grátis!”
*/