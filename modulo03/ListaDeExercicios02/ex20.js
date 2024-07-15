// Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

let tabela = {
    matriculas:     [   436,        567,      247,         468,          364,          257,           153,           876,        265,          526],
    nomes:          ["Carlos",   "Juliana",  "Ana",      "Igor",     "Fernanda",    "Daniela",     "Eduardo",     "Helena",    "Bruno",     "Gabriel"],
    salariosBrutos: [ 4500.00,    3200.50,   5700.75,    2800.00,      6300.25,      4900.80,       5100.60,       3900.90,    7500.40,      4100.30]
}
let deducaoINSS = 0
let salarioLiquido = 0


if (tabela.matriculas.length == tabela.nomes.length && tabela.nomes.length == tabela.salariosBrutos.length) {
    for (let cont = 0; cont < tabela.matriculas.length; cont++) {
        deducaoINSS = tabela.salariosBrutos[cont] * 0.12
        salarioLiquido = tabela.salariosBrutos[cont] - deducaoINSS

        console.log("------------------------------------------------")
        console.log("Matricula: " + tabela.matriculas[cont])
        console.log("Nome: " + tabela.nomes[cont])
        console.log("Salário Bruto: R$" + tabela.salariosBrutos[cont].toFixed(2))
        console.log("Dedução INSS: R$" + deducaoINSS.toFixed(2))
        console.log("Salário Líquido: R$" + salarioLiquido.toFixed(2))
    }
} else {
    console.log("Erro de tabela")
}