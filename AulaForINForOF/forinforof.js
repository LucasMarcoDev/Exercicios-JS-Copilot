const objs=document.getElementsByTagName('div')

let num =[10,20,30,40,50]

for(o of objs){                         //for OF
    console.log(o.innerHTML='Curso')
}


for (o in  objs){                        //for IN
    console.log(objs[o].innerHTML)
}
    


/*
for(let i=0; i<num.length;i++){   for tradicional
    console.log(num[1])
}
    */