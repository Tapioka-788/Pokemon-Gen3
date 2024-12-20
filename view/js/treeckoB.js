const banners = [
    {
        nome: 'treecko',
        img: './../../../model/gen3/treecko2.png',
        id: 'estagio1',
    },
    {
        nome: 'grovyle',
        img: './../../../model/gen3/grovyle2.png',
        id: 'estagio2',
    },
    {
        nome: 'sceptile',
        img: './../../../model/gen3/sceptile2.png',
        id: 'estagio3',
    },
    {
        nome: 'sceptile',
        img: './../../../model/gen3/megasceptile.png',
        id: 'estagio3',
    },
]

export function bannersTreecko() {
    let section = document.getElementById('section')
    let mains = document.getElementById('mains')
    mains.style.width = `${banners.length * 100}vw`;

    for (let i = 0; i < banners.length; i++) {
        let banner = document.createElement('div');
        banner.className = 'mEstagio';
        banner.id = banners[i].nome;

        banner.style.backgroundImage = `url('./../../../../model/background_planta.jpg')`;

        let imagem = document.createElement('img');
        imagem.src = banners[i].img;
        imagem.id = banners[i].id;

        banner.appendChild(imagem)

        mains.appendChild(banner)
    }
    section.appendChild(mains);
}

const familia = [
    {
        nome: "Treecko",
        numero: "252",
        descricao:
            "Treecko é um pequeno Pokémon reptiliano. As mãos e os pés de cada Treecko têm três dígitos. Possui uma cauda verde grande, com dois lóbulos separados. Seu estômago e garganta são vermelhos.",
    },
    {
        nome: "Grovyle",
        numero: "253",
        descricao:
            "Grovyle é a evolução de Treecko. Ele é rápido e ágil, com folhas afiadas como arma. Tem um corpo mais aerodinâmico e se move com destreza entre árvores.",
    },
    {
        nome: "Sceptile",
        numero: "254",
        descricao:
            "Sceptile, a última evolução de Treecko, é um mestre das florestas. Ele possui folhas afiadas em seus braços e uma cauda longa em formato de folha para ataques precisos.",
    },
    {
        nome: "Mega Sceptile",
        numero: "254-M",
        descricao:
            "Mega Sceptile é a forma megaevoluída de Sceptile. Ele ganha um design ainda mais elegante com uma cauda em forma de pinheiro que pode ser lançada como míssil. Também adquire o tipo Dragão, destacando sua majestade.",
    },
];


export function criarTreecko(){
    let section = document.getElementById('section')
    let description = document.getElementById('description')
    description.style.width = `${familia.length * 100}vw`;

    for (let i = 0; i < familia.length; i++) {
        let fundo = document.createElement('div');
        fundo.className = 'fundo';

        let bicho = document.createElement('div');
        bicho.className = 'desc';

        let nome = document.createElement('h1');
        nome.textContent = familia[i].nome;
        nome.className = 'nome';

        let numero = document.createElement('h2');
        numero.textContent = 'N°  - ' + familia[i].numero;
        numero.className = 'numero';

        let txt = document.createElement('p')
        txt.textContent = familia[i].descricao
        txt.className = 'txt'

        bicho.appendChild(nome);
        bicho.appendChild(numero);
        bicho.appendChild(txt)

        fundo.appendChild(bicho)

        description.appendChild(fundo)
    }
    section.appendChild(description);
}