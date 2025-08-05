


let clientes = [
  {
    nome: 'Lucas',
    idade: 27,
    temCartaoFidelidade: true,
    favoritos: ['Bife Acebolado', 'Hamburguer']
  },
  {
    nome: 'Ana',
    idade: 32,
    temCartaoFidelidade: false,
    favoritos: ['Salada Caesar', 'Macarrão']
  },
  {
    nome: 'Carlos',
    idade: 45,
    temCartaoFidelidade: true,
    favoritos: ['Feijoada', 'Picanha']
  }
];
clientes.forEach((cliente) => {
  console.log('Nome: ' + cliente.nome);
  console.log('Idade: ' + cliente.idade);
  console.log('Cartão fidelidade: ' + (cliente.temCartaoFidelidade ? 'Sim' : 'Não'));
  console.log('Favoritos: ' + cliente.favoritos.join(', '));
  console.log('----------------------');
});
