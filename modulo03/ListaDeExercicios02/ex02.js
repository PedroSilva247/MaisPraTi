/*
Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h,
exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/
const prompt = require('prompt-sync')();

let vel = Number(prompt("Digite a velocidade do veículo em Km/h: "))

if (vel > 80) {
    let velAcima = vel - 80
    let multa = velAcima * 5
    console.log("Condutor multado em R$" + multa)
} else {
    console.log("Veículo dentro da velociade permitida.")
}