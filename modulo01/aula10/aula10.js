const professor = {
    nome: "Jaques",
    materia: "Matematica",
    notas: {
        aluno1: 3.5,
        aluno2: 7,
        aluno3: 6.9
    }
}
let soma = 0
let nAlunos = 0

for (aluno in professor.notas) {
    soma += professor.notas[aluno]
    nAlunos ++
}
console.log(soma/nAlunos)

// medir o tamanho de um objeto
// Object.keys retorna uma array com os dados do objeto

console.log(Object.keys(professor.notas).length)