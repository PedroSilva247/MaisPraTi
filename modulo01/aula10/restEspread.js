// rest = juntar
// spread = espalhar

// espalhar
let timesQueNaoTemMundial = ["gremio", "palmeiras"]
let timesQueTemMundial = ["internacional", "barcelona", "real madrid"]
let todosOsTimes = [...timesQueTemMundial,...timesQueNaoTemMundial,"flamengo"]
console.log(todosOsTimes)


// juntar
function multiplicacao(m,...p){
    console.log(m)
    console.log(p)

    let resultado = 0

    p.forEach(elemento => resultado+= m * elemento)
    return resultado
}

console.log(multiplicacao(5,7,12,3))