const days = document.querySelector(".days")
const hours = document.querySelector(".hour")
const mins = document.querySelector(".min")
const secs = document.querySelector(".sec")


let countDown = new Date("aug 12, 2022 10:10:15").getTime()


setInterval(() => {
    let now = new Date().getTime();
    let timeLeft = countDown - now
    const day = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hour = Math.floor((timeLeft % (1000 * 60 * 60*24)) / (1000*60*60))
    const min = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000*60))
    const sec = Math.floor((timeLeft % (1000*60) /1000))

    days.innerText = (day<10)? '0'+day :day
    hours.innerText = (hour<10)? '0'+hour :hour
    mins.innerText = (min<10)? '0'+min :min
    secs.innerText = (sec<10)? '0'+sec :sec
 
}, 1000);
