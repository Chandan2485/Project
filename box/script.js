
let openM=document.querySelector(".model")
let close=document.querySelector(".close")
let modal=document.querySelector(".innerbox")

openM.addEventListener("click",()=>{
    modal.classList.remove("hide")
})
close.addEventListener("click",()=>{
    modal.classList.add("hide")
})