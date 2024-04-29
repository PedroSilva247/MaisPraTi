// Construa um array de números e calcule a soma total dos números e também imprima cada número multiplicado por dois.

// let numeros = [9,2,4,6,32,5,1,5]
// let soma = 0
// let multiplicacao
// for (numero of numeros) {
//     soma += numero
//     console.log(`${numero} * 2 = ${numero*2}`)
// }
// console.log(soma)

let numeros = [9,2,4,6,32,5,1,5]
let soma = 0
numeros.forEach(numero => {
    console.log(`${numero} * 2 = ${numero*2}`)
    soma += numero
})
console.log(soma)