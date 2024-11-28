import { trocarEstagio } from "./mains/trocarEstagio.js";

import { criarTreecko } from "./../view/js/treeckoB.js"
import { bannersTreecko } from "./../view/js/treeckoB.js"

window.trocarEstagio = trocarEstagio;

document.addEventListener("DOMContentLoaded", function(){
    bannersTreecko()
    criarTreecko()
})