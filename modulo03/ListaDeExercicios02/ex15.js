// Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require('prompt-sync')();

let numeros = []

for (let cont = 0; cont < 10; cont++) {
    let n = parseInt(prompt(`Digite o numero inteiro ${cont}: `))
    numeros.push(n)
}
let pares = 0
numeros.forEach((n1, index) => {
    if (n1 % 2 == 0) {
        console.log(`O numero par ${n1} está armazenado na posição ${index}`)
        pares++
    }
})
if (pares == 0) {
    console.log("Não foi digitado nenhum numero par")
}