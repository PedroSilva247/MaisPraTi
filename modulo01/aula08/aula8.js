let elementos = [3,2,5,7,3,9]
let maior = Number.NEGATIVE_INFINITY;

function maiorNumero(array){
    for (elemento of elementos){
        if(elemento > maior) {
            maior = elemento
        }
    }
    return maior
}
console.log(maiorNumero(elementos))

// DEBUG: coloca o ponto vermelho na esqueda + F5