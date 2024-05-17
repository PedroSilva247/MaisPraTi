// 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação). 

const prompt = require('prompt-sync')();

const nota1 = Number(prompt("Digite a primeira nota: "))
const nota2 = Number(prompt("Digite a segunda nota: "))

const media = (nota1+nota2)/2
if (media >= 6) {
    console.log(`Parabéns! Voce foi aprovado com a média ${media}!`)
}