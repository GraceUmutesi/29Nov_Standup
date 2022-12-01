// let button=document.getElementById("button")
// let buttonClicked=(e)=>{
//     console.log(e)
// }
// button.addEventListener('click',buttonClicked)
// let btnGroup=document.getElementById("button-group")
// let buttonGroupCLicked= (e)=>{
//     console.log(e.target)
// }
// btnGroup.addEventListener('click',buttonGroupCLicked)
let butns=Array.from(document.querySelectorAll("button"))
let allCards=document.querySelectorAll(".card")
console.log(butns)
console.log(allCards)
butns.forEach(function(butn){
    butn.addEventListener('click',function(e){
        let filet= e.target.dataset.filter
        console.log(filet)
        allCards.forEach(function(card){
            if (filet=="all"){
                card.style.display="block"
            }else if(card.classList.contains(filet)){
                console.log(card.classList)
                card.style.display="block"
            }else{
                card.style.display="none"
            }
        });
    });
});