const botoesFiltro = document.querySelectorAll('.filtro-categoria');
const trocarDirecao = document.querySelector('.alterar');

// Alterna uma ou mais classes em todos os elementos que casam com o seletor.
function alternarClasses(seletor, classe1, classe2) {
    document.querySelectorAll(seletor).forEach((elemento) => {
        elemento.classList.toggle(classe1);
        if (classe2) elemento.classList.toggle(classe2);
    });
}

// Event listener para trocar direcção (horizontal/vertical)
if (trocarDirecao) {
    trocarDirecao.addEventListener('click', () => {
        alternarClasses('.card', 'card-horizontal', 'card-vertical');
        alternarClasses('.imagens', 'img-horizontal', 'img-vertical');
        alternarClasses('.mudar-direcao-conteudo', 'mudar-conteudo');
        alternarClasses('.info', 'informacoes-produto', 'informacoes-produto-v');
        
        // Atualizar texto do botão
        const primeiroCard = document.querySelector('.card');
        if (primeiroCard?.classList.contains('card-vertical')) {
            trocarDirecao.innerHTML = 'Vertical<span class="material-symbols-outlined">swap_vert</span>';
        } else {
            trocarDirecao.innerHTML = 'Horizontal<span class="material-symbols-outlined">swap_horiz</span>';
        }
    });
}

// Event listeners para botões de filtro
if (botoesFiltro.length > 0) {
    botoesFiltro.forEach((botao) => {
        botao.addEventListener('click', () => {
            // Remove classe selecionado de todos os botões
            botoesFiltro.forEach((b) => b.classList.remove('selecionado'));
            // Adiciona ao botão clicado
            botao.classList.add('selecionado');

            const categoria = botao.dataset.categoria;
            const cards = document.querySelectorAll('.card');

            console.log('Filtrando categoria:', categoria);
            console.log('Cards encontrados:', cards.length);

            // Filtra os cards
            cards.forEach((card) => {
                const deveMostrar = categoria === 'todos' || card.classList.contains(categoria);
                console.log('Card classes:', card.className, 'Deve mostrar:', deveMostrar);
                
                if (deveMostrar) {
                    card.classList.remove('desativar');
                } else {
                    card.classList.add('desativar');
                }
            });
        });
    });
}
