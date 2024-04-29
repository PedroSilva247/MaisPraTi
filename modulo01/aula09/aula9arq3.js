let veiculos = [
    veiculo01 = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2022,
        cor: "Prata",
        motor: "2.0L",
        preco: 60000
    },

    veiculo02 = {
        marca: "Honda",
        modelo: "Civic",
        ano: 2023,
        cor: "Preto",
        motor: "1.5L",
        preco: 55000
    },

    veiculo03 = {
        marca: "Ford",
        modelo: "Fusion",
        ano: 2021,
        cor: "Branco",
        motor: "2.5L",
        preco: 62000
    }
]



for (veiculo of veiculos) {
    console.log(veiculo.modelo)
    for (propriedade in veiculo) {
    console.log(veiculo[propriedade])
    }
    console.log()
}

for (veiculo of veiculos) {
    console.log(veiculo.modelo)
}