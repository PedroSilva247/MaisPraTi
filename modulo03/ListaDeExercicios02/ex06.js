// Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')();

function randomInt(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

console.log("Pensei em um numero de 1 a 5, tente adivinhar")
let computerNum = randomInt(1, 5)

let playerNum = parseInt(prompt("Digite seu palpite: "))
let tentativas = 1
while (playerNum != computerNum) {
    console.log("Você errou, tente novamente!")
    playerNum = parseInt(prompt("Digite seu palpite: "))
    tentativas++
}
console.log(`Parabéns, voce acertou em ${tentativas} tentativas!`)