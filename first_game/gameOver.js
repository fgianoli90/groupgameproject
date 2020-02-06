
 function init(){
    console.log("restart") 
    window.location.reload()
 }


let doGameOver = function(ctx) {
    //window.cancelAnimationFrame(loop)
    ctx.clearRect(0,0,canvas.width, canvas.height);
   //  ctx.fillText('Game Over',200,204);
    ctx.font = '60px serif';
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop("0"," magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillText("Game Over!", canvas.width/2-200, canvas.height/2);
    img.onload = function() {   
      ctx.drawImage(img, avatarGirl.x, avatarGirl.y, avatarGirl.width, avatarGirl.height);
   };
   img.src = "./images/girl_movements/Idle.png";  
    //  ctx.fillStyle= "#6a8ccc"
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
 
 
 
     
 
 



 
