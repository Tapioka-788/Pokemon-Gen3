import { trocarEstagio } from "./mains/trocarEstagio.js";

import { bannersMudkip } from "../view/js/mudkipB.js"
import { criarMudkip } from "../view/js/mudkipB.js"

window.trocarEstagio = trocarEstagio;

document.addEventListener("DOMContentLoaded", function(){
    criarMudkip()
    bannersMudkip()
})