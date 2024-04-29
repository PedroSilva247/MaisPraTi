let soma = function(num1, num2) {
    return num1 + num2
}
let subtracao = function(num1, num2) {
    return num1 - num2
}
let multiplicacao = function(num1, num2) {
    return num1 * num2
}
let divisao = function(num1, num2) {
    return num1 / num2
}

function calculadora(operacao, soma, subtracao, multiplicacao, divisao, num1, num2) {
    switch(operacao){
        case "soma":
            return soma(num1, num2)
            break
        case "subtracao":
            return subtracao(num1, num2)
            break
        case "multiplicacao":
            return multiplicacao(num1, num2)
            break
        case "divisao":
            return divisao(num1, num2)
            break
        
    }
}
console.log(calculadora("multiplicacao", soma, subtracao, multiplicacao, divisao, 10, 10))