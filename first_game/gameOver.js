//Game over 
//Restart game - refreshes page and takes gamer back to start menu
//Typewriter for game over letters effect
//Game over method 

function restartGame(){
    window.location.reload()
}

//Method for game over letter effect
function typeWriter(str,speed,i,txt){
    if (i < txt.length) {
      ctx.clearRect(0,0,canvas.width, canvas.height)
      str+= txt.charAt(i);
      i++;
      ctx.fillText(str, canvas.width/2-250, canvas.height/2);

      setTimeout(function(){
         typeWriter(str,speed,i,txt)
      }, speed);
    }
}

let doGameOver = function(ctx) {
   //Clears canvas and redraws to show gameover
   ctx.fillStyle= "#6a8ccc"
   ctx.font = '80px verdana';
   
   //Declare variables to be used in typewriter function and call method
   let i=0
   var txt = "Game Over!!!";
   var speed = 100;
   let str=""
   typeWriter(str,speed,i,txt)

    aGirl.draw()
    //Increase size of score in header to show final score
    document.querySelector("header").style.fontSize="120px"

    //Removes instructions and creates restart button so that gamer can get back to start menu 
    //gameOver is boolean used to stop animate from continuing to finsh the loop that follows the loop in which the game had ended
    if (!gameOver){
    document.querySelector(".game-intro > p").remove();   
    document.querySelector(".game-intro > img").remove();
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Restart";
    btn.className="glow2";
    document.querySelector(".game-intro").appendChild(btn)
    document.querySelector(".game-intro > button").onclick = restartGame;
    gameOver=true;
    }

}