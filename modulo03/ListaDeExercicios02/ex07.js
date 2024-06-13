const prompt = require('prompt-sync')();



let tipoDeCarro = prompt("Digite o tipo de carro (popular ou luxo): ")
let dias = Number(prompt("Digite o numero de dias de aluguel: "))
let km = Number(prompt("Digite quantos KM o carro percorreu: "))

let diaria = 0
let precoPorKm = 0

if (tipoDeCarro == 'popular') {
    diaria = 90
    if (km <= 100) {
        precoPorKm = 0.2
    } else {
        precoPorKm = 0.1
    }
}
if (tipoDeCarro == 'luxo') {
    diaria = 150
    if (km <= 200) {
        precoPorKm = 0.3
    } else {
        precoPorKm = 0.25
    }
}

let total = precoPorKm*km+diaria*dias
console.log("O preço a ser pago é de R$", total)

