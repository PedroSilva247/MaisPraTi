let elementos1 = [2,4,73,5]
let elementos2 = [4,2,78,3,1,3]
let matriz1 = [elementos1, elementos2]
let soma = 0
function somarMatriz(matriz) {
    for (array of matriz) {
        for (elemento of array){
            soma += elemento
        }
    }
    return soma
}
console.log(somarMatriz(matriz1))