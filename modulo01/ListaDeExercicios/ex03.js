/*
3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações: ● Some 25 ao primeiro inteiro; 
● Triplique o valor do segundo inteiro; 
● Modifique o valor do terceiro inteiro para 12% do valor original; 
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros. 
*/

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

