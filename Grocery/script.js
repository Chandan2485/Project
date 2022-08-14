const input=document.querySelector(".item")
const add_item=document.querySelector(".add_item")
const input_list=document.querySelector(".input_list")
const error=document.querySelector(".error")


add_item.addEventListener("click",addItemToList)

function addItemToList(e){
    e.preventDefault()

    if(input.value<2){
        error.innerText="please enter item name"
        setTimeout(() => {
            error.innerText=""
        }, 1000);
    }
    else{
        input_list.innerHTML += `
        <div class="item">
        <input type="text" readonly="readonly" value="${input.value}">
        <button class="edit">Edit</button>
        <button class="remove">Remove</button>
        </div>`

        error.innerText="One item added"
        setTimeout(() => {
            error.innerText=""
        }, 1000);
        input.value="" 

    }
   
}

input_list.addEventListener("click",editAndRemove)

function editAndRemove (e){
    if(e.target.classList.value=="remove"){
        e.target.parentElement.remove()
    }
    else if(e.target.classList.value=="edit"){
        // console.log(e.target.previousElementSibling)
        e.target.classList.remove("edit")
        e.target.classList.add("save")
        e.target.previousElementSibling.removeAttribute("readonly")
        e.target.innerText="Save"
    }
    else if(e.target.classList.value=="save"){
        e.target.classList.remove("save")
        e.target.classList.add("edit")
        e.target.previousElementSibling.setAttribute("readonly","readonly")
        e.target.innerText="Edit"
    }

}
