// Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.



let sequencia = [0, 1]
while (sequencia.length < 10) {
    let penultimo = sequencia[sequencia.length - 2]
    let ultimo = sequencia[sequencia.length - 1]
    sequencia.push(ultimo+penultimo)
}
console.log(sequencia)