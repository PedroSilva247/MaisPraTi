// 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO. 

const prompt = require('prompt-sync')();

for (let n = parseInt(prompt("Digite um numero inteiro: ")); n > 0; n = parseInt(prompt("Digite um numero inteiro: "))){
    if (n % 2 == 0){
        console.log("PAR")
    } else {
        console.log("IMPAR")
    }
}
console.log("Sistema encerrado")