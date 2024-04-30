const prompt = require('prompt-sync')();

const n = prompt(parseInt("Digite um numero inteiro: "))

for (let cont = 0;cont < 10;cont++) {
    console.log(n)
}