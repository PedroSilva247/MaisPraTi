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