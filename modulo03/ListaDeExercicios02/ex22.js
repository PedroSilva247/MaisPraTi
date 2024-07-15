
if (arr == undefined) {
    console.log(true)
} else {
    console.log(false)
}

let list = [{ nome: "joão", idade: 15 }, { nome: "maria", idade: 20 }];
let index = list.findIndex(item => item.nome === "maria");
