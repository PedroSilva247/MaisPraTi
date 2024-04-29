const prompt = require('prompt-sync')();

let lado1 = Number(prompt("Digite o valor do lado 1: "))
let lado2 = Number(prompt("Digite o valor do lado 2: "))
let lado3 = Number(prompt("Digite o valor do lado 3: "))

if (lado1+lado2>lado3 && lado2+lado3>lado1 && lado1+lado3>lado2) {
    console.log("É possivel formar um triangulo com esses valores de lado")
} else {
    console.log("Não é possivel formar um triangulo com esses valores de lado")
}