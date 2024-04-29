const prompt = require('prompt-sync')();

const lado1 = Number(prompt("Digite o primeiro lado do triangulo: "))
const lado2 = Number(prompt("Digite o segundo lado do triangulo: "))
const lado3 = Number(prompt("Digite o terceiro lado do triangulo: "))

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 == lado2 && lado2 == lado3){
        console.log("O tringulo formado é EQUILATERO")
    } else if (lado1 != lado2 && lado3 != lado2 && lado1 != lado3) {
        console.log("O tringulo formado é ESCALENO")
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        console.log("O tringulo formado é ISOSCELES")
    }
} else {
    console.log("Impossivel formar um triangulo com essas medidas")
}