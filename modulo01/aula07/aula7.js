//Array ou Vetor

let listaCompras = Array()

listaCompras["Frutas"] = Array()
listaCompras["Frutas"][0] = "Morango"
listaCompras["Frutas"][1] = "Banana"
listaCompras["Frutas"][2] = "Mamão"
listaCompras["Frutas"][3] = "Melão"

listaCompras["Higiene"] = Array()
listaCompras["Higiene"][0] = "Papel higienico"
listaCompras["Higiene"][1] = "Pasta de dente"
listaCompras["Higiene"][2] = "Fio dental"


// for (categoria in listaCompras) {
//     console.log(categoria)
//     console.log("")
//     for (item of listaCompras[categoria]){
//         console.log(item)
//     }
//     console.log("")
// }

// Inserir no final:
listaCompras["Frutas"].push("Uva")

// Inserir no inicio:
listaCompras["Higiene"].unshift("Melancia")

for (categoria in listaCompras) {
    console.log(categoria)
    console.log("")
    for (item of listaCompras[categoria]){
        console.log(item)
    }
    console.log("")
}

// Excuir elementos no final
listaCompras["Frutas"].pop()

// Exluir elementos no inicio
listaCompras["Frutas"].shift()

