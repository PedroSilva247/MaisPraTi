/*
Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

const prompt = require('prompt-sync')();

let qntCigDia = parseInt(prompt("Digite o numeros de cigarros qeu voce fuma por dia: "))
let tempoAnos = parseInt(prompt("Digite a quantos anos você fuma: "))
let cigarrosFumados = tempoAnos*365*qntCigDia
let tempoPerdidoMin = cigarrosFumados * 10
let tempoPerdidoDias = tempoPerdidoMin / 1440
console.log("Voce perdeu", tempoPerdidoDias, "dias de sua vida.")
