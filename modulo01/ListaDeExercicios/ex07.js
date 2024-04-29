const prompt = require('prompt-sync')();

const macas = parseInt(prompt("Digite o numero de maças compradas: "))
let preco
if (macas < 12) {
    preco = 0.30
} else if (macas >= 12) {
    preco = 0.25
}
console.log(`Foram compradas ${macas} maçãs por R$${preco} cada. TOTAL: R$${macas*preco}`)