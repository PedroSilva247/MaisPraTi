const prompt = require('prompt-sync')();

const eleitores = prompt("Digite o numero de eleitores: ")
const votosValidos = prompt("Digite o numero de votos válidos: ")
const votosNulos = prompt("Digite o numero de votos nulos: ")
const votosBrancos = prompt("Digite o numero de brancos: ")

console.log(`Válidos: ${votosValidos/eleitores*100}%`)
console.log(`Nulos: ${votosNulos/eleitores*100}%`)
console.log(`Brancos: ${votosBrancos/eleitores*100}%`)

