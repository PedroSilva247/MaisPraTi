/*
13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma: 
1 x N = N 
2 x N = 2N 
3 x N = 3N 
*/ 


const prompt = require('prompt-sync')();

for (let cont = 0; cont < 5; cont++){
    let n = Number(prompt("Digite um numero positivo: "))
    for (let cont1 = 1; cont1 <= n; cont1++){
        console.log(cont1, "x", n, "=", cont1*n)
    }
}
