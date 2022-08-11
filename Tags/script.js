const button = document.querySelector(".btn")

const par1 = document.querySelector(".par1")
const par2 = document.querySelector(".par2")
const par3 = document.querySelector(".par3")

const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")
console.log(img2)

button.addEventListener("mouseout", showItem)

function showItem(e) {
    if (e.target.getAttribute('id') == "btn2") {
        par1.classList.add("par")
        par3.classList.add("par")
        
        img1.classList.add("hide_img")
        img3.classList.add("hide_img")
        img1.classList.remove("img")
        img3.classList.remove("img")
    

        img2.classList.add("img")
        img2.classList.remove("hide_img")
        par2.classList.remove("par")
    }
    else if (e.target.getAttribute('id') == "btn3") {
        par1.classList.add("par")
        par2.classList.add("par")

        img1.classList.add("hide_img")
        img2.classList.add("hide_img")
        img1.classList.remove("img")
        img2.classList.remove("img")
    

        img3.classList.add("img")
        img3.classList.remove("hide_img")
        par3.classList.remove("par")
    }
    else {
        par2.classList.add("par")
        par3.classList.add("par")

        img2.classList.add("hide_img")
        img3.classList.add("hide_img")
        img2.classList.remove("img")
        img3.classList.remove("img")
    

        img1.classList.add("img")
        img1.classList.remove("hide_img")

        par1.classList.remove("par")
    }
}