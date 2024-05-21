/*
Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/

const prompt = require('prompt-sync')();

let dist = Number(prompt("Digite a distancia que o passageiro deseja percorrer em Km/h: "))
let preco
if (dist > 200) {
    preco = 0.45 * dist
} else {
    preco = 0.5 * dist
}
console.log(`O preço da passagem é R$${preco}`)