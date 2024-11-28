const pokemon = [
    {
        nome: 'Treecko',
        img: './../../model/gen3/treecko2.png',
        numero: '252',
    },
    {
        nome: 'Grovyle',
        img: './../../model/gen3/grovyle2.png',
        numero: '253',
    },
    {
        nome: 'Sceptile',
        img: './../../model/gen3/sceptile2.png',
        numero: '254',
    },
    {
        nome: 'Mega Sceptile',
        img: './../../model/gen3/megasceptile.png',
        numero: '254-M',
    },
    {
        nome: 'Torchic',
        img: './../../model/gen3/torchic.png',
        numero: '255',
    },
    {
        nome: 'Combusken',
        img: './../../model/gen3/combusken.png',
        numero: '256',
    },
    {
        nome: 'Blaziken',
        img: './../../model/gen3/blaziken.png',
        numero: '257',
    },
    {
        nome: 'Mega Blaziken',
        img: './../../model/gen3/megablaziken.png',
        numero: '257-M',
    },
    {
        nome: 'Mudkip',
        img: './../../model/gen3/mudkip.png',
        numero: '258',
    },
    {
        nome: 'Marshtomp',
        img: './../../model/gen3/marshtomp.png',
        numero: '259',
    },
    {
        nome: 'Swampert',
        img: './../../model/gen3/swampert.png',
        numero: '260',
    },
    {
        nome: 'Mega Swampert',
        img: './../../model/gen3/megaswampert.png',
        numero: '260-M',
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
