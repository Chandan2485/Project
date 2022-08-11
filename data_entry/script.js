
let addrow=document.querySelector('#addrow')
addrow.addEventListener('click',addDetails)


function addDetails(event){
event.preventDefault()
let name=document.querySelector('.name').value.trim();
let email=document.querySelector('.email').value.trim();
let phone_no=document.querySelector('.phone').value.trim();
let alart1=document.querySelector("p");
let tablerow=document.querySelector('tbody');

if(email.endsWith('@gmail.com')==false ||  email.length <= 10 ){
    alart1.innerText='*Invliad Email'
    document.querySelector('.email').style.backgroundColor="rgb(247, 82, 82)"

    setTimeout(()=>{
        alart1.innerText=''
        document.querySelector('.email').style.backgroundColor="white"
    },2000)
}

else if(phone_no.length != 14 || phone_no.startsWith("+91 ")==false){
    alart1.innerText='*Invliad Mobile Number'
    document.querySelector('.phone').style.backgroundColor="rgb(247, 82, 82)"

    setTimeout(()=>{
        alart1.innerText=''
        document.querySelector('.phone').style.backgroundColor="white"
     },2000)
}

else if(name !='' && email != '' && phone_no !=''){
    tablerow.innerHTML +=
`<tr>
    <td>${name}</td>
    <td>${email}</td>
    <td>${phone_no}</td>
    <td><button class="button">Remove</button></td>
</tr>`

}
else{
    alart1.innerText='*Fill All The Input Field'
    document.querySelector('.name').style.backgroundColor="rgb(247, 82, 82)"

    setTimeout(()=>{
        alart1.innerText=''
        document.querySelector('.name').style.backgroundColor="white"
       },2000)
}

}


