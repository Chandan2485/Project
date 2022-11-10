let userData=JSON.parse(localStorage.getItem("userData"))
let findbtn=document.querySelector('#findbtn')
let matchData=document.querySelector('.matchData')

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