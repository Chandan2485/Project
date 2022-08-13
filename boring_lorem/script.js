const paragraph = [
    "A Punjab Congress leader, Sukhpal Singh Khaira, has alleged that two AAP leaders, including the Transport Minister Laljit Singh Bhullar and Rural Development and Panchayat Minister Kuldeep Singh Dhaliwal were present at Red Fort on January 26, 2021 with Deep Sidhu when separatist Khalistanis had stormed the historical monument.",
    "The Karnataka Congress on Tuesday hit out at Basavaraj Bommai by calling him a “Puppet CM” even as some ruling party leaders ruled out the possibility of a leadership change. In recent times, there has been buzz on and off within the state BJP regarding some kind of an overhaul, particularly after the visit of Union Home Minister Amit Shah to the state. ",
    "The Karnataka Congress on Tuesday hit out at Basavaraj Bommai by calling him a “Puppet CM” even as some ruling party leaders ruled out the possibility of a leadership change. In recent times, there has been buzz on and off within the state BJP regarding some kind of an overhaul, particularly after the visit of Union Home Minister Amit Shah to the state. ",
    "A three-year-old child was killed after being hit by a motorcycle driven by a minor boy near Mangalampet in Tamil Nadu’s Cuddalore. Cuddalore. Both the minor and his father have been apprehended by the police.",
    "Malarvizhi, the 3-year-old child of Govindaraj, a farmer from Pudu Adhandarkollai village of Vijayamanagaram near Mangalampet, Cuddalore, was playing outside her home on Monday, August 8.",
    "Goon leader Shrikant Tyagi, arrested on Tuesday for allegedly assaulting a woman in Noida, was seen flaunting a sticker on his vehicle that falsely identified him as an MLA. During questioning, he allegedly revealed that the sticker on his car was provided by Samajwadi Party leader Swami Prasad Maurya.",
    "Maurya, who is a member of the Uttar Pradesh Legislative Council, said he last met Tyagi in 2017. At the time, Tyagi had introduced himself as a BJP leader. Since then, there has been no contact between him and the self-proclaimed BJP worker, asserted Maurya.",
    "I haven't met him for the last four years. Why is the BJP repeatedly saying that I am related to him? He had a photo with several BJP bigwigs. Now that they stand exposed before the public, they are casting blame on others,",
    "Notably, Maurya was a minister in the previous BJP government in the state. He quit the saffron party ahead of the assembly polls earlier this year and joined the Samajwadi Party. He claimed there is a conspiracy afoot to defame him",
    "Shrikant had got more than half a dozen security personnel. This is not possible without the grace of the BJP government. Today, when the heat is on him, he is taking the name of Swami Prasad Maurya under a well-thought-out conspiracy,",
    "The sticker on his car was provided by Swami Prasad Maurya. The state emblem was made by him himself and the purpose was to create an atmosphere of fear,Alok Singh, Commissioner of police, Noida said on Tuesday.",
    "After his arrest, Tyagi was sent to 14-day judicial custody. He was booked under multiple sections of the Indian Penal Code after he was seen in a video abusing and assaulting a woman for objecting to his alleged illegal construction at a housing society in Noida."
]

const input_value=document.querySelector("#input")
const btn=document.querySelector(".btn")
const paragraphs=document.querySelector(".paragraphs")


btn.addEventListener("click",addpara)

function addpara(){
let removepara=document.querySelector('.paragraphs div')
paragraphs.removeChild(removepara)
let x=input_value.value;
    let inputpara=document.createElement("div")
    for(let i=0;i<x;i++){ 
        if(i>paragraph.length-1){
            x=x-i
            i=0
        }
    let para=document.createElement("p")
        para.innerText=paragraph[i]
        inputpara.append(para)
    }
    paragraphs.append(inputpara)
}
