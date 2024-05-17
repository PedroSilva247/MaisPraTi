/*
Utilizar somente while do exercício 14 ao 16 

15. Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.
*/

const prompt = require('prompt-sync')();

let n = Number(prompt("Digite um numero decimal: "))
let peso = Number(prompt("Digite o peso referente ao numero: "))
let soma = n*peso
let contPesos = peso
while (n != 0 && peso != 0) {
    n = Number(prompt("Digite um numero decimal: "))
    if (n != 0 && peso != 0) {
        peso = Number(prompt("Digite o peso referente ao numero: "))
    }

    if (n != 0 && peso != 0){
        soma += n*peso
        contPesos += peso
    }

}
console.log("Media ponderada: ", soma/contPesos)