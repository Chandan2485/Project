let cross=document.querySelector(".btn")
let menu=document.querySelector("nav")
let hide =document.querySelector(".menu_btn")

cross.addEventListener("click",hideMenu)
hide.addEventListener("click",showmenu)

function hideMenu(){
 menu.classList.add("hidemenubar")
}

function showmenu(){
  menu.classList.remove("hidemenubar")
}
