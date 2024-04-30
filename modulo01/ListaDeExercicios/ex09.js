const prompt = require('prompt-sync')();

const codigo = Number(prompt("Digite o codigo do produto: "))
let regiao
if (codigo > 50 || codigo < 1) {
    regiao = "Produto importado"
} else if (codigo < 5) {
    switch (codigo) {
        case 1:
            regiao = "Sul"
            break
        case 2:
            regiao =  "Norte"
            break
        case 3:
            regiao = "Leste"
            break
        case 4:
            regiao = "Oeste"
            break
    }
} else if (codigo > 4 && codigo < 7) {
    regiao = "Nordeste"
} else if (codigo > 6 && codigo < 10) {
    regiao = "Sudeste"
} else if (codigo > 9 && codigo < 21) {
    regiao = "Centro-Oeste"
} else if (codigo > 24 && codigo < 51) {
    regiao = "Nordeste"
}
console.log(regiao)