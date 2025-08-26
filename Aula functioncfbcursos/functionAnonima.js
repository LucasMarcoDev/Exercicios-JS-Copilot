/*Funçoes anonimas sao funcoes que nao possuem um nome associada a ela
sao funcoes que sao chamadas em tempo de execuçao.
devemos coloca-la em uma variavel para podermos chamar ela
*/

const f = new Function('v1','v2', "return v1 + v2") //Funçao construtor anonima, funcoes anonimas sao declaradas os argumentos dela e o argumento final sera o corpo da funcao ou seja o que ela fara ira executar.

console.log(f(4,3))