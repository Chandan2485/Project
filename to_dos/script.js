const task = document.querySelector(".task")
const submit = document.querySelector(".add")
const todays_task = document.querySelector(".todays_task")
const com_task = document.querySelector(".com_task")

submit.addEventListener("click", addTask)

function addTask() {
    todays_task.innerHTML += `
<div class="tasks">
    <input type="checkbox" name="" id="" class="check">
    <input type="text" class="tasks" readonly="readonly" value=${task.value}>
    <button class="edit">Edit</button>
    <button class="remove">Remove</button>
</div>
    `
    task.value = ""
}



todays_task.addEventListener("click", editRemoveCheck)



function editRemoveCheck(e) {

    if (e.target.classList == "remove") {
        e.target.parentElement.remove()

    }
    else if (e.target.classList == "edit") {

        if(e.target.innerText=="Edit"){
            e.target.previousElementSibling.removeAttribute("readonly")
            e.target.innerText="Save"

        }
        else{
            e.target.previousElementSibling.setAttribute("readonly","readonly")
            e.target.innerText="Edit"
        }
           
    }
    else if (e.target.classList == "check") {
        com_task.innerHTML += `
    <div class="taskc">
        <span class="taskcs">${e.target.nextElementSibling.value}</span>
        <button class="delete">Delete</button>
    </div>
        `
        e.target.parentElement.remove()
    }
}

com_task.addEventListener("click",deletetask)

function deletetask(e){
    if(e.target.classList == "delete"){
        e.target.parentElement.remove()
    }
    }
  
