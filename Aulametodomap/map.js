//Map e usado para percorrer uma lista array, porem nao podemos parar no meio ele percorre a lista inteira
//utilizamos para retornar alguma coisa ou mudar um ou todos os elementos

const converterInt =(e)=>parseInt(e)

let num=['1', '2', '3','4','5']
num.map(converterInt).map(converterInt)
console.log(num)


// const el =document.getElementsByTagName('div')
// const val= Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(val)





// const el = document.getElementsByTagName('div')
// el=[...el]
// el.map((e,i)=>{
//     e.innerHTML= 'CFB Cursos'
// })
// console.log(el)









/*
const cursos =['HTML', 'CSS', 'JavaScript','PHP','React']
cursos.map((elemento,indice)=>{
    console.log('curso ' + elemento + ' - posiçao do curso:' + indice)
} )
    */
