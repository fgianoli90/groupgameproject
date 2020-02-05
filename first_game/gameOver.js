//var canvas = document.querySelector('canvas');  // associates canvas tag with canvas new var

//canvas.width = window.innerWidth; // Sets our canvas to browsers current dimensions
//canvas.height = window.innerHeight/1.5;

//var ctx = canvas.getContext('2d');
let playover=true
 let doGameOver = function(ctx) {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillText('Game Over',200,204);
    ctx.font = '48px serif';
    console.log("remove1")
    document.querySelector(".glow2").remove()
    console.log("remove2")
    document.querySelector(".arrows-img").remove()
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Restart";
    document.querySelector(".game-intro").appendChild(btn)
    playover=false

 };
  
//  let restart= function(){ 
//  let btn = document.createElement("BUTTON");
//  btn.innerHTML = "Restart";
//  var divs=document.getElementsByTagName("div");
//  divs[1]=btn
//  document.body.appendChild(btn);s
 
 
 
     
 
 
if (!playover){
 document.querySelector("body > button").onclick = function(){
   // avatarGirl.x = canvas.width / 2;
   // avatarGirl.y = canvas.height-90;
   

  startGame(); //calls startGame  
  animate()
 }
}

 
