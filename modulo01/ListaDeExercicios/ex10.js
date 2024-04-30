// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. 

const prompt = require('prompt-sync')();

const n = parseInt(prompt("Digite um numero inteiro: "))

for (let cont = 0;cont < 10;cont++) {
    console.log(n)
}