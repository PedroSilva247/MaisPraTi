// Exercicio 1: Par ou Ímpar
const prompt = require('prompt-sync')();

const num = prompt("Digite um número: ")
if (num % 2 == 0) {
    console.log("É par")
} else {
    console.log("É ímpar")
}
