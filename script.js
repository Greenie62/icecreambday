

var cone = document.querySelector(".cone");
var ellipsis = document.querySelector(".ellipsis");
var menuDOM = document.querySelector(".menu");


for(let i=0;i<20;i++){
    for(let j=0;j<30;j++){
        let div = document.createElement("div");
        div.className='cel'
        cone.appendChild(div)
    }
}


function animateEllipse(){

    for(let i=0;i<3;i++){
        setTimeout(()=>{
    let elips = document.createElement("div")
    elips.className='elips'
    if(i === 1){
        elips.classList.add('elips-two')
    }
    if(i === 2){
        elips.classList.add('elips-three')
        setTimeout(()=>{
            console.log('excuse you?')
            document.querySelector(".h1name").innerHTML = "Flan"
            document.querySelector(".belated").innerHTML = "Belated"
        },1500)
    }
    ellipsis.appendChild(elips);

},i*1000);

}
}


 setTimeout(animateEllipse,12000);



 function animateMenu(){
     console.log(menu)
     let menuHTML="<div class='flavorBox'><h1 class='flavors'>- Flavors -</h1><div class='flavorGrid'>"
     menu.flavors.forEach(f=>{
         menuHTML += `<h4>${f}</h4>`
     })
     menuHTML += "</div></div><div class='itemBox'><h1> - Items -</h1></div>"
     menu.items.forEach(f=>{
        menuHTML += `<li class='item'><h3>${f.name}</h3><h4>${f.price}</h4></li>`
    })

    menuHTML += "</div>"

     menuDOM.innerHTML = menuHTML
 }

animateMenu()

var counter = 8;
var counterDOM = document.querySelector(".count")


function countDown(){
    counterDOM.innerHTML = counter;
counter--
    if(counter >= 0){
        setTimeout(countDown,1000)
    }
    else{
counterDOM.innerHTML = "ICE CREAM TIME!"
setTimeout(()=>{
    counterDOM.innerHTML =""
},1250)
    }
}

countDown()