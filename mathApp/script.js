const score=document.querySelector(".score")
const question=document.querySelector(".question")
const input=document.querySelector(".input")
const submit=document.querySelector(".btn")
const no_of_q=document.querySelector(".no_of_q")
let operation=['+','-','*','+','-','*','+','-','*','+']
 let count=1
 let c=1
submit.addEventListener("click",mathQuestion)

function mathQuestion (){
    ques=question.innerText
    if(input.value==eval(ques)){
        score.innerText=`Score: ${count}`
        count++
    }
    question.innerText=`${Math.floor(Math.random()*100)} ${operation[Math.floor(Math.random()*10)]} ${Math.floor(Math.random()*100)}`
    no_of_q.innerText=`Questions: ${c}`
    c++
    input.value=""
}