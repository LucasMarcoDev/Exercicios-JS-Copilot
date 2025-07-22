let tarefas = [];

function adicionarTarefa(tarefa){
    tarefas.push(tarefa)
    return console.log(`Tarefa adicionada:`, tarefas);
};

function mostrarTarefas(){
    return console.log(`Total de tarefas:`, tarefas.length)
}

function removerUltimaTarefa(){
    tarefas.pop()
     console.log('Removendo a ultima tarefa...');
     console.log(tarefas)
}


adicionarTarefa('comer picanha');

mostrarTarefas()
removerUltimaTarefa();

/*









*/