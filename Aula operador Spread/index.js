let n1 = [10,20,40] 
let n2= [11,22,33]
let n3 = [...n1,...n2] //operação com spread(...) esse operador copia os elementos de um array,lista etc, colocando um a um dentro de uma variavel ou outro elemento


let jogador1 ={nome:'Lucas', magia:200, força:300}
let jogador2={nome:'renata', força:700, carisma:200}
let jogador3 = {...jogador1,...jogador2} //operador spread em caso de objetos que tenham  o mesmo atributo como no exemplo: nome e força ele utilizara o último a ser inserido 

console.log(jogador3)

//com spread podemos tornar uma lista de elementos html em um array, tornando possível a utilização e operação dele.