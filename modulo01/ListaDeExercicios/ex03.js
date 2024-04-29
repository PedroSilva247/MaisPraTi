const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("1º numero inteiro: "))
let n2 = parseInt(prompt("2º numero inteiro: "))
let n3 = parseInt(prompt("3º numero inteiro: "))
let n4 = parseInt(prompt("4º numero inteiro: "))

n4 = n1 + n2 + n3
n1 += 25
n2 *= 3
n3*= 0.12


console.log(n1, n2, n3, n4)

