const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite o primeiro numero: "))
let num2 = Number(prompt("Digite o segundo numero: "))
let operacao = prompt("Digite a operação (+, -, *, /): ")

let resultado;

if (operacao === "+"){
    resultado = num1 + num2
}
if (operacao === "-"){
    resultado = num1 - num2
}
if (operacao === "*"){
    resultado = num1 * num2
}
if (operacao === "/"){
    if (num2 !== 0) {
        resultado = num1 / num2  
    } else {
        resultado = undefined
        console.log("Erro: impossivel dividir por 0")
    }
}
if (resultado != undefined){
    console.log(`Resultado: ${Number(resultado)}`)
}
