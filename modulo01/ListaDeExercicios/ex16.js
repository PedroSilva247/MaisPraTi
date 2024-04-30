/*
Utilizar somente while do exercício 14 ao 16 

16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100. Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/

function ePrimo(n1) {
    let cont = 1
    let contDiv = 0
    while (cont <= n1){
        if (n1 % cont == 0) {
            contDiv++
        }
        cont++
    }
    if (contDiv == 2) {
        return true
    } else {
        return false
    }
}
let contPrimos = 0
let n = 101
while (contPrimos < 50) {
    if (ePrimo(n)) {
        console.log(n)
        contPrimos++
    }
    n++
}