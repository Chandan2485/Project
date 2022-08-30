let btn=document.querySelector("button")
console.log(btn)


btn.addEventListener("click",show)

 function show() {

    fetch(`https://api.tvmaze.com/shows/2?embed[]=seasons&embed[]=cast`)
    .then(response=>response.json())//text --> json
    .then(data=>{
     console.log(data)


    //  data.forEach(element => {
    //     if(e.target.id==element.score){
    //         container.innerHTML = null

    //         if(element.show.image===null){
    //             image="img/41m++J8ev-L._SX331_BO1,204,203,200_.jpg"
    //         }else{
    //             image=element.show.image.medium
    //         }

    //         let result =`
    //         <div class="showimg">
    //             <div class="show">
    //             <img src="${image}" alt="null">

    //             <div>
    //             <h3 class="name">${element.show.name}</h3>
    //             <h3>Lengauge: ${element.show.language}</h3>
    //             <h3>Status: ${element.show.status}</h3>
    //             <h3>Type: ${element.show.type}</h3>
    //             <h3>Genres: ${element.show.genres[0]}</h3>
    //             </div>
    //             </div>
    //             <h3>Summary:</h3>
    //             <h3>${element.show.summary}</h3>
                
            

    //         </div>
    //     `
    //     showD.innerHTML += result

    //     }
    //  })
    


   }).catch(err=>alert("invalid city name"))
 }