const conteudos = [
    [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corporis fugiat.",
        "Lorem ipsum dolor sit amet.",
        "Error porro rem corrupti numquam ullam hic magnam nostrum deleniti"
    ],
    [
        "Ratione ipsa accusamus officiis ad? Ad autem odit est vero",
        "Quod ipsum porro deleniti ex laboriosam explicabo doloribus!",
        "Lorem ipsum dolor sit amet consectetur"
    ],
    [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum, tempore",
        "Officia delectus rem! Est, vitae fugiat?",
        "Facilis magni quasi rerum dolore esse ipsam nam explicabo adipisci aut consequatur temporibus"
    ]
]

const btnTab1 = document.getElementById('btn-tab1')
const btnTab2 = document.getElementById('btn-tab2')
const btnTab3 = document.getElementById('btn-tab3')
const content = document.getElementById("content")

function displayContent(items) {

}
function activateButton(btn) {
    btnTab1.className = ''
    btnTab2.className = ''
    btnTab3.className = ''
    btn.className = 'active'
}
function handleClick(event) {
    const btnId = event.target.id
    activateButton(event.target)

    if (btnId === "btn-tab1") {
        displayContent(content[0])
    }
}
btnTab1.addEventListener("click", handleClick)
btnTab2.addEventListener("click", handleClick)
btnTab3.addEventListener("click", handleClick)