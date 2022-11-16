

let dropdownbtn=document.querySelector('.dropdownbtn')
let cities=document.querySelector('.cities')
let getweatherbtn=document.querySelector('.getweatherbtn')
let cards=document.querySelector('.cards')
let searchbtn=document.querySelector('.searchbtn')
let searchInput=document.querySelector('.searchInput')
let cityname;
let cityarr=[]

dropdownbtn.addEventListener('click',()=>{
    cities.classList.toggle('hide')
})

cities.addEventListener('click',(e)=>{
if(e.target.classList.contains('cityname')){
    cityname=e.target.innerText
}
})

function weatherdatafetch(){
    // console.log(cityname)
    fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityname}`)
    .then(res => res.json())
    .then(data =>{
        let cityobj={
            'name':cityname,
            'id':Math.floor(Math.random()*1000)
        }
        cityarr.push(cityobj)
cards.innerHTML+=`
<div class="card" id=${cityobj.id}>
<button class="carddeletbtn">x</button>
<p>${cityname}</p>
<div class="weatherDetais">
  <div>
    <p>description</p>
    <p>Temp (C)</p>
    <p>pressure (hPa)</p>
    <p>date age(no of days)</p>
  </div>
  <div>
      <input type="text" value=${data.description}>
      <p>${data.temp_in_celsius}</p>
      <p>${data.pressure_in_hPa}</p>
      <p>${data.date_and_time}</p>
  </div>
</div>
</div>
`
    })
    .catch(err => console.log(err))
}

cards.addEventListener('click',(e)=>{
    if(e.target.classList.contains('carddeletbtn')){
        e.target.parentElement.remove()
    }
})

function searchfunction(){
    cityarr.forEach((item)=>{
        if(item.name==searchInput.value){
            document.getElementById(`${item.id}`).classList.add('changeBorder')
            setTimeout(() => {
                document.getElementById(`${item.id}`).classList.remove('changeBorder')
            }, 3000);
    }
    })
}


searchbtn.addEventListener('click',searchfunction)
getweatherbtn.addEventListener('click',weatherdatafetch)