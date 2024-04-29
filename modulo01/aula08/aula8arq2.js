let elementos = [3,5,2,3,4]
function reverterArray(array) {
    let i = 0
    let tamanho = array.length
    let arrayReversa = []
    for(elemento of array) {
        arrayReversa[tamanho-i-1] = elemento
        i++
    }
    return arrayReversa
}
console.log(reverterArray(elementos))