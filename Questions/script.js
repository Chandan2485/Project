const question=document.querySelector("section")

question.addEventListener("click",open)

function open(e){

    if(e.target.classList.value=="que"){
        e.target.parentElement.nextElementSibling.classList.toggle("ans_toggle")
        e.target.parentElement.nextElementSibling.classList.toggle("ans")
        if(e.target.nextElementSibling.innerText=="V"){
        e.target.nextElementSibling.innerText=">"
        }
        else{
            e.target.nextElementSibling.innerText="V"
        }
    }
}