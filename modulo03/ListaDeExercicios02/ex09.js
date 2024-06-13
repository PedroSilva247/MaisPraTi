// Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

const prompt = require('prompt-sync')();

let continuar
let somaMasc = 0
let somaFem = 0

do {
    let salario = Number(prompt("Digite o valor do seu salario: "))
    let sexo = prompt("Digite seu sexo (masculino/feminino): ")

    if (sexo == "masculino") {
        somaMasc += salario
    } else if (sexo == 'feminino') {
        somaFem += salario
    }

    continuar = prompt("Deseja continuar cadastrando (sim/nao)? ")
} while (continuar != 'nao')

console.log(`Soma de salarios de homens: ${somaMasc} \nSoma de salarios de mulheres: ${somaFem}`)