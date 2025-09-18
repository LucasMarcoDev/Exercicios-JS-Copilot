const cursos =[...document.querySelectorAll(".curso")];

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el=evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML + "foi cliclado")
    })
})

// c1.addEventListener("click", (evt)=>{
//    const el=evt.target
//     el.classList.add("destaque")
// })

