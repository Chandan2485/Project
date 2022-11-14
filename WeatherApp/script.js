let togglebtn = document.querySelector(".togglebtn");
let citynamesdiv = document.querySelector(".citynames");
let getweatherbtn = document.querySelector(".getweatherbtn");
let Searchcityname = document.querySelector("#Searchcityname");
let Searchbtn = document.querySelector("#Searchbtn");
let cardbox = document.querySelector(".cardbox");

let cityname;
let dataArr = [];

// =====================================================================================================================================
//                                             drop down cities
// =========================================================================================================================================

togglebtn.addEventListener("click", () => {
  citynamesdiv.classList.toggle("hide");
});
citynamesdiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("city")) {
    cityname = e.target.innerText;
  }
});

// =========================================================================================================================
//                                               search function
// ==========================================================================================================================

function datafetchsearch() {
dataArr.map((item)=>{
  if(item.cityname==Searchcityname.value){
    document.getElementById(`${item.id}`).classList.add('borderchang')
      setInterval(() => {
        document.getElementById(`${item.id}`).classList.remove('borderchang')
      }, 3000);
  }
})
}

// ==========================================================================================================================
//                                                weather Data Fetch and show
// ==========================================================================================================================

function datafetch() {
  fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityname}`)
    .then((response) => response.json())
    .then((data) => {

      obj={
        "id":Math.floor(Math.random()*1000),
        'cityname':cityname,
      }

      dataArr.push(obj);
      console.log(dataArr)
      cardbox.innerHTML += `
            <div class="card" id=${obj.id}>
                        <div class="crossbtn">X</div>
                        <h2>${cityname}</h2>
                        <div class="details">
                            <div>
                                <p>Description:</p>
                                <p>Temperature:</p>
                                <p>Pressure (hPa):</p>
                                <p>Date (no. of days):</p>
                            </div>
                            <div>
                                <p> <input type="text" value=${data.description} class='descrip'> </p>
                                <p>${data.temp_in_celsius}</p>
                                <p>${data.pressure_in_hPa}</p>
                                <p>${Math.floor((Date.now()-new Date(data.date_and_time))/(1000*3600*24))}</p>
                            </div>
                        </div>
                    </div>
            `
    })
    .catch((error) => console.log(error));
}

// =========================================================================================================================
//                                                      Card Dlete Function
// ===========================================================================================================================

cardbox.addEventListener("click", (e) => {
    if (e.target.classList.contains("crossbtn")) {
      e.target.parentElement.remove();
    }
  });

  // =========================================================================================================================
//                                                          addEventListener
// ===========================================================================================================================

getweatherbtn.addEventListener("click", datafetch);
Searchbtn.addEventListener("click", datafetchsearch);