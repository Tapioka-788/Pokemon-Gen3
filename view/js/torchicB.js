const banners = [
    {
        nome: 'torchic',
        img: './../../../model/torchic.png',
        id: 'estagio1',
    },
    {
        nome: 'combusken',
        img: './../../../model/combusken.png',
        id: 'estagio2',
    },
    {
        nome: 'blaziken',
        img: './../../../model/blaziken.png',
        id: 'estagio3',
    },
];

export function bannersTorchic() {
    let section = document.getElementById('section');
    let mains = document.getElementById('mains');

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
        nome: 'Torchic',
        numero: '255',
        descricao: 'Torchic é um pequeno Pokémon do tipo fogo que lembra um pintinho. Ele é envolto por penas laranjas e possui um calor interno que mantém sua temperatura alta. É conhecido por sua fofura e suas chamas poderosas.',
    },
    {
        nome: 'Combusken',
        numero: '256',
        descricao: 'Combusken, a evolução de Torchic, é um Pokémon bípede que lembra uma ave lutadora. Ele combina golpes rápidos e fortes com chamas poderosas, representando sua natureza de Fogo e Lutador.',
    },
    {
        nome: 'Blaziken',
        numero: '257',
        descricao: 'Blaziken é a última evolução de Torchic, um Pokémon imponente que mistura agilidade e força. Ele possui pernas fortes e pode lançar chamas intensas, sendo um mestre em combates corpo a corpo.',
    },
];

export function criarTorchic(){
    let section = document.getElementById('section');
    let description = document.getElementById('description');

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
