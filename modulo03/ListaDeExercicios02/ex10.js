// Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.


const prompt = require('prompt-sync')();

let continuar

let soma = 0
let menor = Number.POSITIVE_INFINITY
let cont = 0
let par = 0

do {
    let n = Number(prompt("Digite um número: "))
    continuar = prompt("Deseja continuar cadastrando (sim/nao)? ")

    soma += n

    if (n < menor) {
        menor = n
    }

    cont++

    if (n % 2 == 0) {
        par++
    }
} while (continuar != 'nao')

let media = soma / cont

console.log("Soma dos valores: "+soma)
console.log("Menor numero registrado: "+menor)
console.log("Média de todos os números: "+media)
console.log("Quantidade de números pares: "+par)
