let pedidos = [                         //criação de array com objetos
    {
        cliente: 'Lucas',
        prato:'Feijoada',
        preco: 40,
        pagamento: 'Crédito',
    },

    {
        cliente: 'Renata',
        prato:'Macarrão Carbonara',
        preco: 27.80,
        pagamento: 'Débito',
    },

    {
        cliente: 'Mirian',
        prato:'Pizza',
        preco: 50,
        pagamento: 'Pix',
    },
]
 

  function mostrarResumoPedido(pedido) {
  console.log(`Pedido de ${pedido.cliente}: ${pedido.prato} - R$${pedido.preco.toFixed(2)} | Pagamento: ${pedido.pagamento}`);

  if (pedido.preco > 45) {
    console.log('🛑 Atenção: esse pedido está acima do valor médio!');
  }

  console.log('----------------------------------------');
}


  pedidos.forEach(mostrarResumoPedido)

  
/*
let pedidos = [
  {
    cliente: 'Lucas',
    prato: 'Feijoada',
    preco: 40,
    pagamento: 'Crédito',
  },
  {
    cliente: 'Renata',
    prato: 'Macarrão Carbonara',
    preco: 27.80,
    pagamento: 'Débito',
  },
  {
    cliente: 'Mirian',
    prato: 'Pizza',
    preco: 50,
    pagamento: 'Pix',
  },
];

function mostrarResumoPedido(pedido) {
  console.log(`Pedido de ${pedido.cliente}: ${pedido.prato} - R$${pedido.preco.toFixed(2)} | Pagamento: ${pedido.pagamento}`);

  if (pedido.preco > 45) {
    console.log('🛑 Atenção: esse pedido está acima do valor médio!');
  }

  console.log('----------------------------------------');
}

pedidos.forEach(mostrarResumoPedido);

*/