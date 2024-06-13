// Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
//     Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
//     valores da sequência.

const prompt = require('prompt-sync')();

let primeiroTermo = Number(prompt("Digite o primeiro termo da PA: "))
let razao = prompt("Digite a razão da PA: ")

for (let cont = 0; cont < 10; cont++) {
    console.log(primeiroTermo+razao*cont)
}