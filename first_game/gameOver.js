
 function init(){
    console.log("restart") 
    window.location.reload()
    // startGame(); //calls startGame  
    // animate()
 }
//var canvas = document.querySelector('canvas');  // associates canvas tag with canvas new var

//canvas.width = window.innerWidth; // Sets our canvas to browsers current dimensions
//canvas.height = window.innerHeight/1.5;

//var ctx = canvas.getContext('2d');
let playover = true
 let doGameOver = function(ctx) {
    window.cancelAnimationFrame(loop)
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillText('Game Over',200,204);
    ctx.font = '48px serif';
    console.log("remove1")

    if (!gameOver){
    document.querySelector(".game-intro > p").remove();   
    console.log("remove2")
    document.querySelector(".game-intro > img").remove();
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Restart";
    document.querySelector(".game-intro").appendChild(btn)
    document.querySelector(".game-intro > button").onclick = init;
    btn.className="glow2"
    console.log(document.querySelector(".game-intro"))
    }
    playover=false;
    gameOver=true;

    // document.querySelector(".arrows-img").remove();
    // document.querySelector(".game-intro").appendChild(btn);
};

//  let restart= function(){ 
//  let btn = document.createElement("BUTTON");
//  btn.innerHTML = "Restart";
//  var divs=document.getElementsByTagName("div");
//  divs[1]=btn
//  document.body.appendChild(btn);s
 
 
 
     
 
 



 
