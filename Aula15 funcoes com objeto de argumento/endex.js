// Exercicio para treinamento de uso da funçao utilizando um objeto como pametro

let caracter = {
    nome: 'Lucas',
    poder: 60,
    altura:1.68,
    sexo: 'm'
}

function heroi(lista){
    console.log('nome do heroi: ' + lista.nome  )
    if(lista.poder >= 50){
        console.log('O heroi tem muito poder')
    };
    if(lista.sexo === 'm'){
        console.log('O heroi e um homem')
    }else{
        console.log('O heroi e uma mulher')
    }
    console.log(`tem ${lista.altura} de altura`)

}

heroi(caracter)