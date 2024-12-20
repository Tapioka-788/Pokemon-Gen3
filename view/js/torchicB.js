const banners = [
    {
        nome: 'torchic',
        img: './../../../model/gen3/torchic.png',
        id: 'estagio1',
    },
    {
        nome: 'combusken',
        img: './../../../model/gen3/combusken.png',
        id: 'estagio2',
    },
    {
        nome: 'blaziken',
        img: './../../../model/gen3/blaziken.png',
        id: 'estagio3',
    },
    {
        nome: 'blaziken',
        img: './../../../model/gen3/megablaziken.png',
        id: 'estagio3',
    },
];

export function bannersTorchic() {
    let section = document.getElementById('section');
    let mains = document.getElementById('mains');
    mains.style.width = `${banners.length * 100}vw`;


    for (let i = 0; i < banners.length; i++) {
        let banner = document.createElement('div');
        banner.className = 'mEstagio';
        banner.id = banners[i].nome;

        banner.style.backgroundImage = `url('./../../../../model/background_fogo.jpg')`;

        let imagem = document.createElement('img');
        imagem.src = banners[i].img;
        imagem.id = banners[i].id;

        banner.appendChild(imagem);

        mains.appendChild(banner);
    }
    section.appendChild(mains);
}

const familia = [
    {
        nome: "Torchic",
        numero: "255",
        descricao:
            "Torchic é um Pokémon do tipo Fogo que possui um corpo fofo e plumado. Ele é pequeno e carregado de energia, soltando faíscas ao lutar.",
    },
    {
        nome: "Combusken",
        numero: "256",
        descricao:
            "Combusken é a evolução de Torchic. Este Pokémon tipo Fogo/Lutador possui pernas poderosas para chutes e é um combatente habilidoso.",
    },
    {
        nome: "Blaziken",
        numero: "257",
        descricao:
            "Blaziken, a evolução final de Torchic, é um guerreiro do tipo Fogo/Lutador. Ele tem chamas em seus punhos e pernas, tornando-o feroz em combate.",
    },
    {
        nome: "Mega Blaziken",
        numero: "257-M",
        descricao:
            "Mega Blaziken, a forma megaevoluída de Blaziken, é um lutador ainda mais poderoso. Suas chamas e força explosiva tornam seus golpes devastadores. Ele é conhecido por sua habilidade *Speed Boost*, que aumenta sua velocidade no combate.",
    },
];

export function criarTorchic(){
    let section = document.getElementById('section');
    let description = document.getElementById('description');
    description.style.width = `${familia.length * 100}vw`;

    for (let i = 0; i < familia.length; i++) {
        let bicho = document.createElement('div');
        bicho.className = 'desc';

        let nome = document.createElement('h1');
        nome.textContent = familia[i].nome;
        nome.className = 'nome';

        let numero = document.createElement('h2');
        numero.textContent = 'N°  - ' + familia[i].numero;
        numero.className = 'numero';

        let txt = document.createElement('p');
        txt.textContent = familia[i].descricao;
        txt.className = 'txt';

        bicho.appendChild(nome);
        bicho.appendChild(numero);
        bicho.appendChild(txt);

        description.appendChild(bicho);
    }
    section.appendChild(description);
}
