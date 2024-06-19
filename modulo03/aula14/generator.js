function* myGenerator() {
    yield [1,2,3,4,5]
}
function* myGenerator2() {
    yield* [1,2,3,4,5] // o * faz precorrer a lista
}

let obj = myGenerator()
let obj2 = myGenerator2()

let valorObj = obj.next()
let valorObj2 = obj2.next()

let valor2Obj2 = obj2.next()




console.log(valorObj)
console.log(valorObj2)
console.log(valor2Obj2)

