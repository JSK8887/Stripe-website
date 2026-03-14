const cards = document.querySelectorAll(".card")

function reveal(){

cards.forEach(card=>{

const position = card.getBoundingClientRect().top
const screen = window.innerHeight

if(position < screen - 100){

card.style.opacity = 1
card.style.transform = "translateY(0)"

}

})

}

window.addEventListener("scroll",reveal)



// smooth scroll

document.querySelectorAll("a").forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault()

document.querySelector(this.getAttribute("href"))?.scrollIntoView({

behavior: "smooth"

})

})

})