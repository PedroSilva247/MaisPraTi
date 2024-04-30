// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit. 
const prompt = require('prompt-sync')();
const tempC = Number(prompt("Digite uma temperatura em graus Celsius: "))
const tempF = (9/5*tempC)+32
console.log(`${tempC}ºC equivale a ${tempF}ºF`)