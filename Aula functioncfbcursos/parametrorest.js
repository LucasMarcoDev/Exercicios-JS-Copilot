// Rest (...) e o operador que pega todos os itens de uma lista,objeto, ou parametros fazendo com que nao precisemos especificar
//A quantidade
function soma (...valores){
    
    let res =0
    for(let v of valores){
        res+=v
    }
    return res
}

console.log(soma(8,5,10,12))