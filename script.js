const innerbox=document.querySelector(".innerbox");
const scourr=document.querySelector(".scour");

const startgame=document.querySelector(".startgame");
let hasstart=false;

startgame.addEventListener("click",function(e){
    let scour=0;
hasstart=true
 let gameee=   setInterval(() => {
        rendomixe()
    }, 900);
    if(hasstart){
        innerbox.addEventListener("click",function(){
       
            scour++
            scourr.innerHTML=scour
            clickksound.play()
        })
    }
})
let clickksound=new Audio()
clickksound.src="./mixkit-game-click-1114.wav";


function rendomixe(){
    let top=Math.floor(Math.random()*420);
    let left=Math.floor(Math.random()*440)
 

    innerbox.style.left=`${left}px`;
    innerbox.style.top=`${top}px`;
}







clickksound.play()