
 var cityInput = document.querySelector('.cityName');
 var btn1 = document.querySelector('.submitButton');
 let container = document.querySelector(".container")
//  let showD=document.querySelector(".showD")




 btn1.addEventListener('click',function(){
    // showD.innerHTML = null
    container.innerHTML = null
    // 
    fetch(`https://api.tvmaze.com/search/shows?q=${cityInput.value}`)
     .then(response=>response.json())//text --> json
     .then(data=>{

        //  console.log(data);
        data.forEach(element => {
            if(element.show.image===null){
                image="img/41m++J8ev-L._SX331_BO1,204,203,200_.jpg"
            }else{
                image=element.show.image.medium
            }

            let result =`
            <div class="box ">
                <img src="${image}" alt="null">
                <h3><span>Name:</span> ${element.show.name}</h3>
                <h3><span>lengauge:</span> ${element.show.language}</h3>
                <h3><span>Start Date:</span> ${element.show.premiered}</h3>
                <a href="#" id="${element.score}">Show Details</a>
            </div>
        `
        container.innerHTML += result
        });
        
     }).catch(err=>alert("invalid city name"))

 })


//  container.addEventListener("click",show)

//  function show(e) {

//     fetch(`https://api.tvmaze.com/search/shows?q=${cityInput.value}`)
//     .then(response=>response.json())//text --> json
//     .then(data=>{
//      console.log(data)


//      data.forEach(element => {
//         if(e.target.id==element.score){
//             container.innerHTML = null

//             if(element.show.image===null){
//                 image="img/41m++J8ev-L._SX331_BO1,204,203,200_.jpg"
//             }else{
//                 image=element.show.image.medium
//             }

//             let result =`
//             <div class="showimg">
//                 <div class="show">
//                 <img src="${image}" alt="null">

//                 <div>
//                 <h3 class="name">${element.show.name}</h3>
//                 <h3>Lengauge: ${element.show.language}</h3>
//                 <h3>Status: ${element.show.status}</h3>
//                 <h3>Type: ${element.show.type}</h3>
//                 <h3>Genres: ${element.show.genres[0]}</h3>
//                 </div>
//                 </div>
//                 <h3>Summary:</h3>
//                 <h3>${element.show.summary}</h3>
                
            

//             </div>
//         `
//         showD.innerHTML += result

//         }
//      })
    


//    }).catch(err=>alert("invalid city name"))
//  }