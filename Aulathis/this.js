function aluno(nome,nota){
    this.nome = nome 
    this.nota = nota

   this.dadosAnonimos = function(){
     setTimeout(function(){
        console.log(this.nome)
        console.log(this.nota)
     },2000)
   }

   this.dadosAnonimos = function(){
     setTimeout(()=>{
        console.log(this.nome)
        console.log(this.nota)
     },2000)
   }
}

const aluno1= new aluno('Lucas',10000)
aluno1.dadosAnonimos()
