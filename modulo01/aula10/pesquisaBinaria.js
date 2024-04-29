// errado
function pesquisaBinaria(lista, correto) {
    let listaOrdenada = lista
    let list = listaOrdenada
    let t = listaOrdenada.length-1
    let termoCentral
    while(t != 1) {
        termoCentral = parseInt(t/2)
        if (termoCentral == correto){
            return `Consegui, o valor é ${termoCentral}`
        } else if (correto > termoCentral){
            list.splice(0, list.indexOf(termoCentral))
        } else if (correto < termoCentral){
            list.splice(list.indexOf(termoCentral), list.length - 1)
        }
    }
    return `Consegui, o valor é ${list[0]}`
}

lista1 = [3,5,6,32,4,65,1,74,234,23]
console.log(pesquisaBinaria(lista1, 5))