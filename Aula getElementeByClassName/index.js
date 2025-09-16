const cursosTodos =[...document.getElementsByClassName("curso")]
const cursosC1 =[...document.getElementsByClassName("c1")]
const cursosC2 =[...document.getElementsByClassName("c2")]
const crusoEspecial =document.getElementsByClassName("curso")[6]


console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)

cursosC1.map((el)=>{
    el.classList.add("destaque")
})
