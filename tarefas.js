function mostrarTarefasPorTipo() {
    // Obtendo tarefas de categorias separadas do localStorage
    let faculdade = JSON.parse(localStorage.getItem('faculdade')) || [];
    let trabalho = JSON.parse(localStorage.getItem('trabalho')) || [];
    let vidaPessoal = JSON.parse(localStorage.getItem('vidaPessoal')) || [];

    // Selecionando as divs para cada categoria
    const faculdadeDiv = document.getElementById('faculdadeDiv');
    const trabalhoDiv = document.getElementById('trabalhoDiv');
    const vidaPessoalDiv = document.getElementById('vidaPessoalDiv');

    // Limpando o conteúdo das divs
    faculdadeDiv.innerHTML = '<h2>Faculdade</h2>';
    trabalhoDiv.innerHTML = '<h2>Trabalho</h2>';
    vidaPessoalDiv.innerHTML = '<h2>Vida Pessoal</h2>';

    // Função para criar elementos de tarefa
    function criarItemTarefa(tarefa, index, tipo) {
        let item = document.createElement('div');
        item.className = 'tarefa-item';
        item.textContent = `${tarefa.nome} - ${tarefa.data}`;

        // Botão de exclusão
        let lixeira = document.createElement('img');
        lixeira.src = "https://img.icons8.com/ios/50/full-trash--v1.png";
        lixeira.alt = "Excluir";
        lixeira.style.width = "20px";
        lixeira.style.height = "20px";
        lixeira.style.cursor = "pointer";

        lixeira.addEventListener('click', () => {
            removerTarefa(index, tipo);
        });

        item.appendChild(lixeira);
        return item;
    }

    // Adicionando tarefas para cada categoria
    faculdade.forEach((tarefa, index) => {
        faculdadeDiv.appendChild(criarItemTarefa(tarefa, index, 'faculdade'));
    });

    trabalho.forEach((tarefa, index) => {
        trabalhoDiv.appendChild(criarItemTarefa(tarefa, index, 'trabalho'));
    });

    vidaPessoal.forEach((tarefa, index) => {
        vidaPessoalDiv.appendChild(criarItemTarefa(tarefa, index, 'vidaPessoal'));
    });
}

function removerTarefa(index, tipo) {
    // Obtendo a lista de tarefas correspondente
    let tarefas = JSON.parse(localStorage.getItem(tipo)) || [];
    tarefas.splice(index, 1);

    // Atualizando o localStorage
    localStorage.setItem(tipo, JSON.stringify(tarefas));

    alert("Tarefa concluída e removida!");
    mostrarTarefasPorTipo();
}

// Inicializando a exibição de tarefas
mostrarTarefasPorTipo();
