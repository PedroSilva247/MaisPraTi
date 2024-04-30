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