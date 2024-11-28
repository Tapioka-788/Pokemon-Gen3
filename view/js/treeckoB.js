const banners = [
    {
        nome: 'treecko',
        img: './../../model/treecko2.png',
        id: 'treeckoImagem',
    },
    {
        nome: 'grovyle',
        img: './../../model/grovyle2.png',
        id: 'grovyleImagem',
    },
    {
        nome: 'sceptile',
        img: './../../model/sceptile2.png',
        id: 'sceptileImagem',
    },
]

export function bannersTreecko() {
    let section = document.getElementById('section')
    let mains = document.getElementById('mains')

    for (let i = 0; i < banners.length; i++) {
        let banner = document.createElement('div');
        banner.className = 'mEstagio';
        banner.id = banners[i].nome;

        let imagem = document.createElement('img');
        imagem.src = banners[i].img;
        imagem.id = banners[i].id;

        banner.appendChild(imagem)

        mains.appendChild(banner)
    }
    section.appendChild(mains);
}
