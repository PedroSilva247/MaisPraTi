const pessoa = {
    nome: "Pedro",
    idade: 16,
    profissao: "Desenvolvedor",
    empregada: false
}

pessoa.falar = function(x) {
    return `${pessoa.nome}: ` + x
}
delete pessoa.empregada

// console.log(pessoa)
console.log(pessoa.falar("Ola mundo"))