let listaProdutos = ["Computador", "Caneta", "Chuteira"]
const prompt = require('prompt-sync')();

let prod
for(let prom=prompt("Digite um produto ('exit' para sair): "); prom != "exit"; prom=prompt("Digite um produto ('exit' para sair): ")) {
    prod = listaProdutos.indexOf(prom)
    if (prod == -1) {
        console.log("Elemento nao existe na array")
        let add = prompt("Deseja encluir esse produto? (s/n) ")
        if (add == "s") {
            listaProdutos.push(prom)
            console.log(listaProdutos)
        }
    } else {
        console.log("Elemento existe e esta na posição " + prod)
    }
    console.log()
}
console.log("LISTA FINAL: " + listaProdutos)