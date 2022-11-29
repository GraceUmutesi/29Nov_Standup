/*
Html DOM methods
document.getElementById(id)
document.getElementByTagName(name)
document.getElementByClassName()
*/ 

let element1=document.getElementById("element1")
console.log(element1)
let element2=document.getElementsByTagName("h1")
console.log(element2)
let element3=document.getElementsByClassName("photo")
console.log(element3)

let element4=document.querySelector(".buttons")
console.log(element4)
// element1.style.backgroundColor="blue"
let cars=document.querySelectorAll(".card")
let counter=0
cars.forEach((car)=>{  
    //The Element.lastElementChild read-only property returns an element's last child Element, or null if there are no child elements.
    car.lastElementChild.innerHTML=counter
    console.log(car)
    counter++
})

