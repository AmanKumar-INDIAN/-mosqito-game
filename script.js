const innerbox=document.querySelector(".innerbox");
const scourr=document.querySelector(".scour");
let clickksound=new Audio()
clickksound.src="./mixkit-game-click-1114.wav";


function rendomixe(){
    let top=Math.floor(Math.random()*420);
    let left=Math.floor(Math.random()*440)
 

    innerbox.style.left=`${left}px`;
    innerbox.style.top=`${top}px`;
}



setInterval(() => {
    rendomixe()
}, 900);

let scour=0;
innerbox.addEventListener("click",function(){
   
    scour++
    scourr.innerHTML=scour
    clickksound.play()
})
clickksound.play()