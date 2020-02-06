
 function init(){
    console.log("restart") 
    window.location.reload()
 }


let doGameOver = function(ctx) {
 
    ctx.clearRect(0,0,canvas.width, canvas.height);
   
    ctx.fillStyle= "#6a8ccc"
    ctx.font = '120px verdana';
    ctx.fillText("Game Over!", canvas.width/2-350, canvas.height/2);
    img.onload = function() {   
      ctx.drawImage(img, avatarGirl.x, avatarGirl.y, avatarGirl.width, avatarGirl.height);
   };
   
   img.src = "./images/girl_movements/Idle.png";  
    document.querySelector("header").style.fontSize="120px"

    if (!gameOver){
    document.querySelector(".game-intro > p").remove();   
    console.log("remove2")
    document.querySelector(".game-intro > img").remove();
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Restart";
    btn.className="glow2";
    document.querySelector(".game-intro").appendChild(btn)
    document.querySelector(".game-intro > button").onclick = init;

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
 
 
 
     
 
 



 
