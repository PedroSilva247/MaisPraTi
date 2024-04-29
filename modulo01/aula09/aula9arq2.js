let pc = {
    placaDeVideo: "Gtx 1660 ti",
    processador: "Ryzen 5 5600x",
    ram: 16,
    armazenamento: "ssd",
    capacidade: 1500,
    compatibilidade: function(jogo) {
        if (pc.ram >= jogo.ram && pc.capacidade >= jogo.capacidade) {
            return "Compativel"
        }else {
            return "Inconpativel"
        }
    }
}

let csgo = {
    ram: 12,
    capacidade: 200
}
console.log(pc.compatibilidade(csgo))
