const pokemon = [
    {
        nome: 'Treecko',
        img: './../../model/treecko2.png',
        numero: '252',
    },
    {
        nome: 'Grovyle',
        img: './../../model/grovyle2.png',
        numero: '253',
    },
    {
        nome: 'Sceptile',
        img: './../../model/sceptile2.png',
        numero: '254',
    },
    {
        nome: 'Torchic',
        img: './../../model/torchic.png',
        numero: '255',
    },
    {
        nome: 'Combusken',
        img: './../../model/combusken.png',
        numero: '256',
    },
    {
        nome: 'Blaziken',
        img: './../../model/blaziken.png',
        numero: '257',
    },
    {
        nome: 'Mudkip',
        img: './../../model/mudkip.png',
        numero: '258',
    },
    {
        nome: 'Marshtomp',
        img: './../../model/marshtomp.png',
        numero: '259',
    },
    {
        nome: 'Swampert',
        img: './../../model/swampert.png',
        numero: '260',
    },

];


export function criarDex() {
    let dex = document.getElementById('cartoes3');

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

        // Adicionar o cartão à Dex
        dex.appendChild(cartao);
    }
}
