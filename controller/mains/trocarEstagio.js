let section = document.getElementById('section')
let mains = document.getElementById('mains')
let description = document.getElementById('description')

section.appendChild(mains)
section.appendChild(description)

export function trocarEstagio(nTroca) {

    mains.style.left = '-' + nTroca + '00vw';
    description.style.left = '-' + nTroca + '00vw';
}