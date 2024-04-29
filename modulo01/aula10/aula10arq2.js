let biblioteca = [
    { nome: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
    { nome: "Romeu e Julieta", autor: "William Shakespeare", ano: 1597 },
    { nome: "1984", autor: "George Orwell", ano: 1949 },
    { nome: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
    { nome: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967 },
    { nome: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997 },
    { nome: "O Código Da Vinci", autor: "Dan Brown", ano: 2003 },
    { nome: "A Menina que Roubava Livros", autor: "Markus Zusak", ano: 2005 },
    { nome: "A Culpa é das Estrelas", autor: "John Green", ano: 2012 }
];



for (livro of biblioteca) {
    if (livro.ano < 2000) {
        console.log(livro.nome, "-", livro.autor)
    }
}
