//Break e uma expressao que gera uma interrupçao na execuçao
//Continue quando executado dentro de um loop, para somente uma iteraçao e pula indo para a proxima

let n = 0
let max = 1000
let pares = 0

for(let i =n; i<max;i++){

    if(i%2!=0){
        continue
    }
    pares++
}

console.log('Qauntidade de pares: ' + pares)
console.log('Fim do programa')



/*
let n = 0
let max = 1000

while(n < max){
    console.log('cfb cursos - ' + n)
    if(n>10){
        break
    }
    n++
}
console.log('fim do programa')

*/