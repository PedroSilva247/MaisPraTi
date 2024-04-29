const prompt = require('prompt-sync')();

const n1 = Number(prompt("Digite um valor: "))
const n2 = Number(prompt("Digite outro valor: "))
let maior, menor
if (n1 > n2) {
    maior = n1
    menor = n2
    console.log(menor, "->", maior)
} else if (n2 > n1){
    maior = n2
    menor = n1
    console.log(menor, "->", maior)
} else {
    console.log("Não digite valores iguais!")
}

