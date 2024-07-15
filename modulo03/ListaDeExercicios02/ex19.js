// Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require('prompt-sync')();
let hora = 0
let minuto = 0
let segundo = 0
let horarios = []

function lerHorario(cont) {
    let horario = prompt(`Digite o horario ${cont} (HH:MM:SS): `)
    hora = Number(horario.substring(0,2))
    minuto = Number(horario.substring(3,5))
    segundo = Number(horario.substring(6,8))
}

for (let cont = 1; cont <= 5; cont++) {
    lerHorario(cont)
    while(!(hora < 24 && minuto < 60 && segundo < 60)) {
        console.log("Digite um horário valido!")
        lerHorario(cont)
    }
    let horarioFormatado = hora + "." + minuto + "." + segundo
    horarios.push(horarioFormatado)
}
for (hor of horarios) {
    console.log(hor)
}