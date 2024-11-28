import { trocarEstagio } from "./mains/trocarEstagio.js";

import { bannersTorchic } from "../view/js/torchicB.js"
import { criarTorchic } from "../view/js/torchicB.js"

window.trocarEstagio = trocarEstagio;

document.addEventListener("DOMContentLoaded", function(){
    criarTorchic()
    bannersTorchic()
})