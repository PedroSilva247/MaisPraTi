// Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

function randomInt(min, max) {
    return Number(Math.floor(Math.random() * ((max + 1) - min)) + min)
}

let numeros = []

for (let cont = 0; cont < 20; cont++) {
    numeros.push(randomInt(0, 99))
}

console.log(numeros)
console.log(numeros.sort((a, b) => {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
}))