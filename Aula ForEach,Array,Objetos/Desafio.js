let pratos = [      //Array de objetos 
    {
        nomeDoPrato: 'Feijoada',
        preco: 40,
        vegano: false,
        ingredientes: ['Bacon', 'linguiça', 'feijão','pé de porco', 'carne seca']

    },
    {
        nomeDoPrato: 'Lamen',
        preco: 20,
        vegano: true,
        ingredientes: ['Miojo', 'CHimiChurri', 'Brócolis','pé de Tofu', 'Cenoura ']
    },
    {
    nomeDoPrato: 'Lasanha',
        preco: 35,
        vegano: false,
        ingredientes: ['Massa', 'Presunto', 'Queijo','pé de porco - Carne moída ', ' molho de tomate']
    }
    
];
    pratos.forEach((prato)=>{                            //função foreach que passa por cada objeto dentro da array
        console.log('Prato escolhido' + prato.nomeDoPrato);
        console.log('Valor R$' + prato.preco);
        console.log('Opção vegana ?' + (prato.vegano ? 'Sim' : 'Não'));
        console.log('ingredientes do prato: ' + prato.ingredientes.join('-'));
        console.log('----------------------------------------')
    });

