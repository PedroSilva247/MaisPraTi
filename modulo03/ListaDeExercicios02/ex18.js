// Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.

const prompt = require('prompt-sync')();

let nome = prompt(`Digite o nome do funcionario: `)
let cargo = prompt(`Digite o cargo do funcionario: `)
let salario = Number(prompt(`Digite o salario do funcionario: `))

console.log("Nome: ", nome)
console.log("Cargo: ", cargo)
console.log("Salário: ", salario)

// Não sei se eu entendi o exercício