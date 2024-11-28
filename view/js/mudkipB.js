const banners = [
    {
        nome: 'mudkip',
        img: './../../../model/gen3/mudkip.png',
        id: 'estagio1',
    },
    {
        nome: 'marshtomp',
        img: './../../../model/gen3/marshtomp.png',
        id: 'estagio2',
    },
    {
        nome: 'swampert',
        img: './../../../model/gen3/swampert.png',
        id: 'estagio3',
    },
    {
        nome: 'megaSwampert',
        img: './../../../model/gen3/megaswampert.png',
        id: 'estagio3',
    },
];

export function bannersMudkip() {
    let section = document.getElementById('section');
    let mains = document.getElementById('mains');
    mains.style.width = `${banners.length * 100}vw`;

    for (let i = 0; i < banners.length; i++) {
        let banner = document.createElement('div');
        banner.className = 'mEstagio';
        banner.id = banners[i].nome;

        banner.style.backgroundImage = `url('./../../../../model/background_agua.jpg')`;

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
        nome: "Mudkip",
        numero: "258",
        descricao:
            "Mudkip é um Pokémon do tipo Água. Ele usa as nadadeiras para detectar mudanças na corrente da água e é um excelente nadador.",
    },
    {
        nome: "Marshtomp",
        numero: "259",
        descricao:
            "Marshtomp é a evolução de Mudkip. Este Pokémon do tipo Água/Terra é adaptado para viver tanto na terra quanto na água, com membros fortes e resistentes.",
    },
    {
        nome: "Swampert",
        numero: "260",
        descricao:
            "Swampert, a evolução final de Mudkip, é um poderoso Pokémon Água/Terra que pode prever tempestades. É conhecido por sua força bruta e habilidade de nadar rapidamente.",
    },
    {
        nome: "Mega Swampert",
        numero: "260-M",
        descricao:
            "Mega Swampert, a forma megaevoluída de Swampert, ganha músculos incrivelmente desenvolvidos e se torna ainda mais poderoso. Sua força física é inigualável, e ele se move com incrível velocidade na água.",
    },
];

export function criarMudkip() {
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
