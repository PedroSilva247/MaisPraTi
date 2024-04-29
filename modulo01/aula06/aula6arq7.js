const prompt = require('prompt-sync')();
let multipicando = Number(prompt("Taboada do: "))
for (let cont=1;cont<=10;cont++) {
    console.log(`${multipicando} * ${cont} = ${cont*multipicando}`)
}