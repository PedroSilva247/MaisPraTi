// FUNÇÃO CALLBACK

function exibirFuncao(callbackSucesso, callbackErro) {
    if(true) { //sentença
        callbackSucesso("Funçoes de callBack em caso de sucesso") // função 1
    } else {
        callbackErro("Função callBack em caso de erro")
    } // função 2
}

let callbackSucesso = function(titulo) {
    console.log(titulo)
}

let callbackErro = function(erro) {
    console.log(erro)
}

exibirFuncao(callbackSucesso, callbackErro)

// Executa uma função ou outra dependendo do resultado de uma sentença
// a sentença pode tambem ser um parametro
// basicamente define qual função vai utilizar, de acordo com o resultado da sentença, se a sentença for == true, ele executa a funcao callbackSucesso, se for falso ele executa a sentença callbackErro