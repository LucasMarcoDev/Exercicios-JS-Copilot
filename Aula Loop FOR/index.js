/* temos loops definidos e indefinidos sendo o loop definido o FOR
e indefinidos temos o while e do while usamos loops definifidos
quando sabemos a quantidade de vocês que precisaremos iterar o bloco 
de comandos quando não souber o a quantidade iremos usar o while ou do while
*/
console.log("INÍCIO DO PROGRAMA...")

for(let i = 0; i < 100; i++){
    if(i%2==0){
        console.log(i + ' É par')
    }else{
        console.log(i +  ' É ímpar')
    }
}

console.log("Fim do programa...")