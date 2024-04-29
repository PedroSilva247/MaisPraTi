let BikeFactory = function(cor, tipo, marca) {
    return {
        cor,
        tipo,
        marca
    }
}
let bicicleta1 = BikeFactory("Azul", "Speed", "Caloi")

console.log(bicicleta1)

for (prop in bicicleta1) {
    console.log(bicicleta1[prop])
}