// Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

const prompt = require('prompt-sync')();
let nomes = []

for (let cont = 1; cont <= 7; cont++) {
    let nome = prompt(`Digite o nome ${cont}: `)
    nomes.push(nome)
}
nomes.reverse()
for (nome of nomes) {
    console.log(nome)
}