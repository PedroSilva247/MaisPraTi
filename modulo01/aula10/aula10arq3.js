const filmes = [
    {titulo: "Tropa de Elite", genero: "Acao"},
    {titulo: "Capitão Fantástico", genero: "Drama"},
    {titulo: "O Poderoso Chefão", genero: "Crime"},
    {titulo: "Clube da Luta", genero: "Drama"},
    {titulo: "Oppenheimer", genero: "Biografia"},
    {titulo: "High School Musical", genero: "Musical"},
    {titulo: "Barbie", genero: "Comedia"},
]
let contagem = {}

filmes.forEach(function(filme){
    if (contagem[filme.genero]) {
        contagem[filme.genero] ++
    } else {
        contagem[filme.genero] = 1
    }
    
})
console.log(contagem)