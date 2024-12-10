document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('tarefa').value.trim();
    let data = document.getElementById('data').value.trim();
    let tipo = document.querySelector('input[name="tipo"]:checked');

    if (!nome || !data || !tipo) {
        alert("Por favor, preencha todos os campos e selecione uma categoria.");
        return;
    }

    const tarefa = {
        nome,
        data,
    };

    // Recupera os vetores de categorias
    let faculdade = JSON.parse(localStorage.getItem('faculdade')) || [];
    let trabalho = JSON.parse(localStorage.getItem('trabalho')) || [];
    let vidaPessoal = JSON.parse(localStorage.getItem('vidaPessoal')) || [];

    // Adiciona a tarefa ao vetor correspondente
    if (tipo.value === 'Faculdade') {
        faculdade.push(tarefa);
        localStorage.setItem('faculdade', JSON.stringify(faculdade));
    } else if (tipo.value === 'Trabalho') {
        trabalho.push(tarefa);
        localStorage.setItem('trabalho', JSON.stringify(trabalho));
    } else if (tipo.value === 'Vida Pessoal') {
        vidaPessoal.push(tarefa);
        localStorage.setItem('vidaPessoal', JSON.stringify(vidaPessoal));
    }

    alert("Tarefa adicionada com sucesso!");

    document.getElementById('tarefa').value = '';
    document.getElementById('data').value = '';
    document.querySelectorAll('input[name="tipo"]').forEach(input => input.checked = false);

});
