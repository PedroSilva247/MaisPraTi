/*
Utilizar somente while do exercício 14 ao 16 

14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. 
*/

const prompt = require('prompt-sync')();

let n = Number(prompt("Digite um numero decimal: "))
let soma = n
let cont = 1
while(n != 0) {
    n = Number(prompt("Digite um numero decimal: "))
    soma += n
    cont ++
}
console.log("Media aritimetica:", soma/(cont-1))