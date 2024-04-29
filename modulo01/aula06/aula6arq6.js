const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite o primeiro numero: "))
let num2 = Number(prompt("Digite o segundo numero: "))
let operacao = prompt("Digite a operação (+, -, *, /): ")

let resultado;

switch (operacao) {
    case "+":
        resultado = num1 + num2
        break
    case "-":
        resultado = num1 - num2
        break
    case "*":
        resultado = num1 * num2
        break
    case "/":
        if (num2 !== 0) {
            resultado = num1 / num2
            break
        } else {
            resultado =  undefined
            console.log("Impossivel dividir por 0")
        }
}
if (resultado != undefined){
    console.log(resultado)
}