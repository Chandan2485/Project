let showD=document.querySelector(".showD")
let id=localStorage.getItem("id")
// console.log(id)


    fetch(`https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
    .then(response=>response.json())//text --> json
    .then(data=>{
     console.log(data)
            if(data.image===null){
                image="img/41m++J8ev-L._SX331_BO1,204,203,200_.jpg"
            }else{
                image=data.image.medium
            }

            let result =`
            <div class="showimg">
                <div class="show">
                <img src="${image}" alt="null">

                <div>
                <h3 class="name">${data.name}</h3>
                <h3>Lengauge: ${data.language}</h3>
                <h3>Status: ${data.status}</h3>
                <h3>Type: ${data.type}</h3>
                <h3>Genres: ${data.genres[0]}</h3>
                </div>
                </div>
                <h3>Summary:</h3>
                <h3>${data.summary}</h3>


                
                <div>
                <img src="${image}" alt="null">
   
                </div>

                
            

            </div>
        `
        showD.innerHTML += result
   }).catch(err=>alert("invalid city name"))
