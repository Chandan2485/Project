
const decrease = document.querySelector(".btn1")
const Reset = document.querySelector(".btn2")
const increase = document.querySelector(".btn3")
let counter = document.querySelector("h2")


decrease.addEventListener('click', conuntdec)
Reset.addEventListener('click', countreset)
increase.addEventListener('click', countinc)
let i = 0;

function countinc() {
    i++
    abc()
}
function conuntdec() {
    i--
    abc()
}
function countreset() {
    i = 0
    counter.innerText = `${i}`
    counter.style.color = "black"
}

function abc() {
    if (i > 0) {
        counter.innerText = `${i}`
        counter.style.color = "green"
    }
    else if (i < 0) {
        counter.innerText = `${i}`
        counter.style.color = "red"
    }
    else {
        counter.innerText = `${i}`
        counter.style.color = "black"
    }
}