// Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require('prompt-sync')();

function randomInt(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) ) + min;
}

let computerPlaynum = randomInt(0,2)
console.log("0 para PEDRA \n1 para PAPEL \n2 para TESOURA")
let playerPlaynum = parseInt(prompt("Pedra(0), papel(1) ou tesoura(2): "))

let playerPlaystr = ''
let computerPlaystr = ''

switch(computerPlaynum) {
    case 0:
        computerPlaystr = "pedra"
        break
    case 1:
        computerPlaystr = "papel"
        break
    case 2:
        computerPlaystr = "tesoura"
        break
}
switch(playerPlaynum) {
    case 0:
        playerPlaystr = "pedra"
        break
    case 1:
        playerPlaystr = "papel"
        break
    case 2:
        playerPlaystr = "tesoura"
        break
    default:
        console.log("Digite um numero de 0 a 2!")
}

if (computerPlaynum == playerPlaynum) {
    console.log(`Você e o computador escolheram ${playerPlaystr}. O jogo empatou!`)
} else if ((computerPlaynum == 0 && playerPlaynum == 2) || (computerPlaynum == 1 && playerPlaynum == 0) || (computerPlaynum == 2 && playerPlaynum == 1)) {
    console.log(`Você escolheu ${playerPlaystr} e o computador escolheu ${computerPlaystr}. O computador venceu!`)
} else if ((playerPlaynum == 0 && computerPlaynum == 2) || (playerPlaynum == 1 && computerPlaynum == 0) || (playerPlaynum == 2 && computerPlaynum == 1)) {
    console.log(`Você escolheu ${playerPlaystr} e o computador escolheu ${computerPlaystr}. Você venceu!`)
}