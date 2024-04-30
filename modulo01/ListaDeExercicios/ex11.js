const prompt = require('prompt-sync')();

for (let n = parseInt(prompt("Digite um numero inteiro: ")); n > 0; n = parseInt(prompt("Digite um numero inteiro: "))){
    if (n % 2 == 0){
        console.log("PAR")
    } else {
        console.log("IMPAR")
    }
}
console.log("Sistema encerrado")