let addRow=document.querySelector('#addDataBtn')
let dataTable=document.querySelector('.add_Data_Table table tbody')

let AddNewPersonbtn=document.querySelector('.AddNewPersonbtn')
let RetrieveInformationbtn=document.querySelector('.RetrieveInformationbtn')
let Addnewtab=document.querySelector('.Add_new_tab')
let Retrievetab=document.querySelector('.Retrieve_tab')

// let userData=JSON.parse(localStorage.getItem("userData"))
let findbtn=document.querySelector('#findbtn')
let matchData=document.querySelector('.matchData')
let userData=JSON.parse(localStorage.getItem("userData"));

(function (){

    
    if(userData != null){

    
    dataTable.innerHTML=null
    userData.map((user)=>{
    dataTable.innerHTML +=`
    <tr class='filledRow'>
              <td><input type="text"  value=${user.Name} readonly /></td>
              <td><input type="date" name=""  value=${user.Date_of_Birth} readonly /></td>
              <td><input type="number" name=""  value=${user.Aadhar_Number} readonly /></td>
              <td><input type="number" name=""  value=${user.Mobile_Number} readonly /></td>
              <td>${user.Age}</td>
              <td><button id="savebtn">Save</button><button class="deletebtn" id="${user.Mobile_Number}">Delete</button></td>
            </tr> 
    `
    })
}else{
    localStorage.setItem('userData',JSON.stringify([]))
}
})();


AddNewPersonbtn.addEventListener('click',()=>{
    Retrievetab.setAttribute('id','hide')
    Addnewtab.removeAttribute('id')
})

RetrieveInformationbtn.addEventListener('click',()=>{
    Addnewtab.setAttribute('id','hide')
    Retrievetab.removeAttribute('id')
})

// ==================================================================================

// ===========================================================================================
function addRowTOtable(){
    dataTable.innerHTML +=`
    <tr>
              <td><input type="text" id="name" /></td>
              <td><input type="date" name="" id="dob" /></td>
              <td><input type="number" name="" id="aadhar" /></td>
              <td><input type="number" name="" id="mobile" /></td>
              <td></td>
              <td><button id="savebtn">Save</button><button id="deletebtn">Delete</button></td>
            </tr> 
    `
}
// function showdata(){
//     dataTable.innerHTML=null
//     userData.map((user)=>{
//     dataTable.innerHTML +=`
//     <tr class='filledRow'>
//               <td><input type="text"  value=${user.Name} readonly /></td>
//               <td><input type="date" name=""  value=${user.Date_of_Birth} readonly /></td>
//               <td><input type="number" name=""  value=${user.Aadhar_Number} readonly /></td>
//               <td><input type="number" name=""  value=${user.Mobile_Number} readonly /></td>
//               <td>${user.Age}</td>
//               <td><button id="savebtn">Save</button><button class="deletebtn" id="${user.Mobile_Number}">Delete</button></td>
//             </tr> 
//     `
//     })
// }
// showdata()
addRowTOtable()
// ======================================================================================================
addRow.addEventListener('click',onClickaddRowTOtable)
function onClickaddRowTOtable(){
    if(!document.querySelector('#name')){
        addRowTOtable()
    }
}
// ===============================================================================================================
dataTable.addEventListener('click',Action)
function Action(e){   
if(e.target.classList.contains('deletebtn')){
    let filterData =userData.filter((user)=>{
        return user.Mobile_Number != e.target.id
    })
    localStorage.setItem("userData",JSON.stringify(filterData))
    userData=JSON.parse(localStorage.getItem("userData"))
    console.log(userData)
    showdata()
    addRowTOtable()
}

if(e.target.id=='savebtn'){
let name=document.querySelector('#name').value.trim();
let dob=document.querySelector('#dob').value
let aadhar=document.querySelector('#aadhar').value.trim();
let mobile=document.querySelector('#mobile').value.trim();
if(name.length>0 && dob.length>0 && aadhar.length==12 && mobile.length==10){
    let newUser={
        'Name':name,
        'Date_of_Birth':dob,
        'Aadhar_Number':aadhar,
        'Mobile_Number':mobile,
        'Age':new Date().getFullYear() - new Date(`${dob}`).getFullYear()
    }
   


   userData.push(newUser)
   localStorage.setItem("userData",JSON.stringify(userData))
   showdata()
}}}


findbtn.addEventListener('click',findResult)
function findResult(){
    let findvalue=document.querySelector('#findvalue').value.trim()
    console.log(findvalue)
  let result= userData.filter((user)=>{
       return user.Aadhar_Number == findvalue;
    })
    console.log(result)
    if(result[0]){
        matchData.innerHTML=`
        <div class="matchFoundData">
        <div><p>Name : </p> <p> ${result[0].Name}</p> </div>
        <div><p>DOB : </p> <p> ${result[0].Date_of_Birth}</p> </div>
        <div><p>Aadhar :</p> <p> ${result[0].Aadhar_Number}</p> </div>
        <div><p>Mobile No : </p> <p> ${result[0].Mobile_Number}</p> </div>
        <div><p>Age : </p> <p>${result[0].Age} </p> </div>
        </div>
        `
    }else{
        matchData.innerHTML=` 
        <div class="matchFoundData">
        Not Found
        </div>
        `
    }
}