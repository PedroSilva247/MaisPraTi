// 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0 

const prompt = require('prompt-sync')();

const nota1 = Number(prompt("Digite a primeira nota: "))
const nota2 = Number(prompt("Digite a segunda nota: "))

const media = (nota1+nota2)/2
if (media >= 6) {
    console.log(`Parabéns! Voce foi APROVADO com a média ${media}!`)
} else {
    console.log(`Voce ficou com media ${media} e foi REPROVADO. Estude mais!`)
}