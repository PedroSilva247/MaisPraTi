// Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.

const prompt = require('prompt-sync')();

let nomes = []
let idades = []

for (let cont = 0; cont < 9; cont++) {
    let nome = prompt(`Digite o nome da pessoa ${cont}: `)
    let idade = parseInt(prompt(`Digite a idade da pessoa ${cont}: `))
    nomes.push(nome)
    idades.push(idade)
}

idades.forEach((idadePessoa, index) => {
    if (idadePessoa < 18) {
        console.log("--------------------------------")
        console.log(nomes[index])
        console.log(idades[index])
    }
})