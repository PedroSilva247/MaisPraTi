let abas = [
    document.getElementById('aba1'),
    document.getElementById('aba2'),
    document.getElementById('aba3'),
    document.getElementById('aba4'),
    document.getElementById('aba5')
]

let hrs = [
    document.getElementById('hr1'),
    document.getElementById('hr2'),
    document.getElementById('hr3'),
    document.getElementById('hr4'),
    document.getElementById('hr5'),
    document.getElementById('hr6')
]

function aba(n) {
    for(aba1 of abas) {
        aba1.style.background = "white"
        
    }
    for(hr of hrs) {
        hr.style.display= "block"
        hr.style.display = "block"
    }
    abas[n-1].style.background = "#b4b4b4"

    hrs[n-1].style.display = "none"
    hrs[n].style.display = "none"


    requisitar("./assets/contents/aba"+(n)+"-content.html")
}





function requisitar(url) {
    let section = document.getElementById('sec-content')
    section.innerHTML = ''
    
    let ajax = new XMLHttpRequest()
    ajax.open('GET', url)

    ajax.onreadystatechange = () => {
        if(ajax.readyState == 4 && ajax.status == 200) {
            section.innerHTML = ajax.responseText
        }

        if(ajax.readyState == 4 && ajax.status == 404) {
            section.innerHTML = 'Requisição finalizada, porém o recurso não foi encontrado. Erro 404.'
        }
    }
    ajax.send()

}
aba(1)