import pokemon from '../../model/gen3/dexSimu.js';

console.log(pokemon);

export function criarDex() {
    let dex = document.getElementById('cartoes3');
    let card = document.createElement('div')
    card.id = 'card'

    for (let i = 0; i < pokemon.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'fichas';

        let nome = document.createElement('h1');
        nome.textContent = pokemon[i].nome;
        nome.className = 'name';

        let imagem = document.createElement('img');
        imagem.src = pokemon[i].img;
        imagem.className = 'image';

        let numeDex = document.createElement('h1')
        numeDex.textContent = pokemon[i].numero

        // Adicionar elementos ao cartão
        cartao.appendChild(nome);
        cartao.appendChild(imagem);
        cartao.appendChild(numeDex)

        card.appendChild(cartao)

        // Adicionar o cartão à Dex
        dex.appendChild(card);
    }
}
