// Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')();

let seg1 = Number(prompt("Digite o valor do segmento de reta 1: "))
let seg2 = Number(prompt("Digite o valor do segmento de reta 2: "))
let seg3 = Number(prompt("Digite o valor do segmento de reta 3: "))

if (seg1+seg2>seg3 && seg3+seg2>seg1 && seg1+seg3>seg2) {
    console.log('É possivel formar um retangulo com esses segmentos de reta.')
} else {
    console.log('Não é possivel formar um retangulo com esses segmentos de reta.')
}