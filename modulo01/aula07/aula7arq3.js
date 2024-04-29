// Funções

function calcularArea(largura,comprimento){
    return largura*comprimento
}

const prompt = require('prompt-sync')();

let lg = prompt("Digite a largura: ")
let cp = prompt("Digite o comprimento: ")
console.log(`A area do terreno é ${calcularArea(lg,cp)}`)