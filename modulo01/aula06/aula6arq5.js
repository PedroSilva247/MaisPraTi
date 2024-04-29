// Switch case
const prompt = require('prompt-sync')();
let dia = parseInt(prompt("Digite um numero de um dia da semana: "))

let nomeDia;

switch(dia){
    case 1:
        nomeDia = "Domingo"
        break
    case 2:
        nomeDia = "Segunda"
        break
    case 3:
        nomeDia = "Terça"
        break
    case 4:
        nomeDia = "Quarta"
        break
    case 5:
        nomeDia = "Quinta"
        break
    case 6:
        nomeDia = "Sexta"
        break
    case 7:
        nomeDia = "Sábado"
        break
    default:
        console.log("Digite um numero de 1 a 7")
}
console.log(`O dia é ${nomeDia}`)