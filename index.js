/*
Html DOM methods
document.getElementById(id)
document.getElementByTagName(name)
document.getElementByClassName()
*/ 

let element1=document.getElementById("element1")
console.log(element1)
let element3=document.getElementsByClassName("photo")
console.log(element3)

let element4=document.querySelector(".buttons")
console.log(element4)
// element1.style.backgroundColor="blue"
let cards=document.querySelectorAll(".card")
let counter=0
cards.forEach((car)=>{  
    //The Element.lastElementChild read-only property returns an element's last child Element, or null if there are no child elements.
    car.lastElementChild.innerHTML=counter
    console.log(car)
    counter++
})
let elt=document.getElementsByClassName("card Nature")
console.log(elt)
function mouseOver(){
    let tag=document.createElement('p')
    let text= document.createTextNode("I love mountains and hiking")
    tag.appendChild(text)
    elt[0].appendChild(tag)
}

function mouseOut(){
    elt[0].removeChild(elt[0].lastElementChild)
}

function changeColor(obj){
    obj.style.color="green"
}



