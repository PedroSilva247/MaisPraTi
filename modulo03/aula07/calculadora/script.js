function inserir(valor) {
    if (document.formulario.tela.value.length < 14) {
        document.formulario.tela.value += valor
    }
}
function limparTela() {
    document.formulario.tela.value = ''
}

function deletar() {
    let expressao = document.formulario.tela.value 
    document.formulario.tela.value = expressao.substring(0, expressao.length-1)
}

function calcularTotal() {
    let result = document.formulario.tela.value
    if(result) {
        document.formulario.tela.value = eval(result)
    }
}


function azul() {
    document.getElementById("calc").style.background = "blue"
}
function vermelho() {
    document.getElementById("calc").style.background = "red"
}
function verde() {
    document.getElementById("calc").style.background = "green"
}
function amarelo() {
    document.getElementById("calc").style.background = "yellow"
}
function laranja() {
    document.getElementById("calc").style.background = "orange"
}
function roxo() {
    document.getElementById("calc").style.background = "purple"
}