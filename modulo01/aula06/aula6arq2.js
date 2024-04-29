const prompt = require('prompt-sync')();
let num1 = prompt("Digite um numero:")
let num2 = prompt("Digite outro numero:")

if (num1 > num2){ 
    console.log(`O numero ${num1} é maior que o numero ${num2}`)
} else if (num2 > num1) {
    console.log(`O numero ${num2} é maior que o numero ${num1}`)
} else {
    console.log("Os numeros são iguais")
}