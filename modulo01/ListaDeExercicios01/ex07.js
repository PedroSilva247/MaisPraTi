// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. 

const prompt = require('prompt-sync')();

const macas = parseInt(prompt("Digite o numero de maças compradas: "))
let preco
if (macas < 12) {
    preco = 0.30
} else if (macas >= 12) {
    preco = 0.25
}
console.log(`Foram compradas ${macas} maçãs por R$${preco} cada. TOTAL: R$${macas*preco}`)