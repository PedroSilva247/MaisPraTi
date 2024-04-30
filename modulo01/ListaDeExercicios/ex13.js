const prompt = require('prompt-sync')();

for (let cont = 0; cont < 5; cont++){
    let n = Number(prompt("Digite um numero positivo: "))
    for (let cont1 = 1; cont1 <= n; cont1++){
        console.log(cont1, "x", n, "=", cont1*n)
    }
}
