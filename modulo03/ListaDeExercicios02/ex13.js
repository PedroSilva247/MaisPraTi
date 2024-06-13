// Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// da sequência de Fibonacci.

let sequencia = [0, 1]
while (sequencia.length < 15) {
    let penultimo = sequencia[sequencia.length - 2]
    let ultimo = sequencia[sequencia.length - 1]
    sequencia.push(ultimo+penultimo)
}
console.log(sequencia)