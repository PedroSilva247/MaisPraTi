/*
Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.

1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.

2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.

3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel.
*/
const prompt = require('prompt-sync')();

let hoteis = []
let reservas = []
let ids = []

function acao() {
    console.log("-----------------------------------------------")
    let fazer = prompt("Digite o que deseja fazer: ")
    console.log("-----------------------------------------------")
    switch (fazer) {
        case "add":
            return add()
        case "sair":
            console.log("Até mais!")
            console.log("-----------------------------------------------")
            break
        case "buscar hoteis":
            return buscarHoteis()
        default:
            console.log("Digite uma ação existente!")
            acao()
    }
}

function addHotel(idNew, nomeNew, cidadeNew, quartosTotaisNew, quartosDisponiveisNew) {
    let hotel = {
        id: idNew,
        nome: nomeNew,
        cidade: cidadeNew,
        quartosTotais: quartosTotaisNew,
        quartosDisponiveis: quartosDisponiveisNew
    }
    hoteis.push(hotel)
    console.log("Hotel adicionado!")
    return acao()
}

function add() {
    let ids = []
    for (hotel of hoteis) {
        ids.push(hotel.id)
    }
    let newHotelId = Number(prompt("Digite o id do novo hotel: "))
    while (ids.indexOf(newHotelId) != -1) {
        console.log("-----------------------------------------------")
        console.log("O id digitado já está em uso!")
        console.log("-----------------------------------------------")
        newHotelId = prompt("Digite o id do novo hotel: ")
    }
    let newHotelNome = prompt("Digite o nome do novo hotel: ")
    let newHotelCidade = prompt("Digite a cidade do novo hotel: ")
    let newHotelQuartosTotais = Number(prompt("Digite quantos quartos tem o novo hotel: "))
    let newHotelQuartosDisponiveis = Number(prompt("Digite quantos quartos disponíveis tem o novo hotel: "))
    console.log("-----------------------------------------------")
    return addHotel(newHotelId, newHotelNome, newHotelCidade, newHotelQuartosTotais, newHotelQuartosDisponiveis)
}

function buscarHoteis() {
    let cidadeDesejada = prompt("Digite a cidade em que deseja buscar hoteis: ")
    console.log("-----------------------------------------------")
    let hoteisNaCidade = []
    for (hotel of hoteis) {
        if (hotel.cidade == cidadeDesejada) {
            hoteisNaCidade.push(hotel)
        }
    }
    let numeroDeHoteis = hoteisNaCidade.length
    if (numeroDeHoteis == 0){
        console.log(`Não há hoteis cadastrados em ${cidadeDesejada}.`)
    } else {
        console.log(`HOTEIS EM ${cidadeDesejada.toUpperCase()}`)
        for (hotel of hoteisNaCidade) {
            console.log("-----------------------------------------------")
            console.log("Id: ", hotel.id)
            console.log("Nome: ", hotel.nome)
            console.log("Cidade: ", hotel.cidade)
            console.log("Quartos Totais: ", hotel.quartosTotais)
            console.log("Quartos Disponíveis: ", hotel.quartosDisponiveis)
        }
    }
    return acao()
}

acao()