import criarCard from '/componentes/card.js'

export async function mostrarCard(container, dados) {
    dados.results.forEach(item => {
        const card = criarCard(item);
        container.appendChild(card);
    });
}