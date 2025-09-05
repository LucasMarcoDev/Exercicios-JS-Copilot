const pessoa = { nome: "Lucas", idade: 30 };

for (let chave in pessoa) {
  console.log(chave);        // nome, idade
  console.log(pessoa[chave]); // Lucas, 30
}


const nome = "Lucas";

for (let letra of nome) {
  console.log(letra); // L, u, c, a, s
}
