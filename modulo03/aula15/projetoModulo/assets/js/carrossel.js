// let space1Control = 1
// let space2Control = 2
// let space3Control = 3


const images = document.querySelectorAll('.corousel-images img')

let slideIndex = 1

function next() {
    for(let i = 0; i < images.length; i++) {
        images[i].src = './assets/images/img' + Math.abs((slideIndex + i) % images.length) + '.jpg'
    }
}

// function next() {
    
//     let space1 = document.getElementById("space1")
//     let space2 = document.getElementById("space2")
//     let space3 = document.getElementById("space3")

    
//     space1Control++
//     space2Control++
//     space3Control++
//     if(space1Control > 6) {
//         space1Control = 1
//     }
//     if(space2Control > 6) {
//         space2Control = 1
//     }
//     if(space3Control > 6) {
//         space3Control = 1
//     }
//     space1.src = "assets/images/img"+(space1Control)+".jpg"
//     space2.src = "assets/images/img"+(space2Control)+".jpg"
//     space3.src = "assets/images/img"+(space3Control)+".jpg"
// }

// function back() {
//     let space1 = document.getElementById("space1")
//     let space2 = document.getElementById("space2")
//     let space3 = document.getElementById("space3")

    
//     space1Control--
//     space2Control--
//     space3Control--
//     if(space1Control < 1) {
//         space1Control = 6
//     }
//     if(space2Control < 1) {
//         space2Control = 6
//     }
//     if(space3Control < 1) {
//         space3Control = 6
//     }
//     space1.src = "assets/images/img"+(space1Control)+".jpg"
//     space2.src = "assets/images/img"+(space2Control)+".jpg"
//     space3.src = "assets/images/img"+(space3Control)+".jpg"
// }