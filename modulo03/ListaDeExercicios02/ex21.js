// Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const prompt = require('prompt-sync')();

function pesoIdeal(alt, sexo) {
    if (sexo = "M") {
        return 72.7 * alt - 58
    } else if (sexo = "F") {
        return 62.1 * alt - 44.7
    }
}

let altura = Number(prompt("Digite sua altuta em metros: "))
let sexo = Number(prompt("Digite seu sexo (M/F): "))
let pesoIdeal1 = pesoIdeal(altura, sexo)
console.log("Seu peso ideal é " + pesoIdeal1 + "Kg")