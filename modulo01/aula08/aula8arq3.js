let elementos = [3,5,2,3,4]
function reverterArray(array) {
    let arrayReversa = []
    for(elemento of array) {
        arrayReversa.unshift(elemento)
    }
    return arrayReversa
}
console.log(reverterArray(elementos))