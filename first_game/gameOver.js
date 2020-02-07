//Game over 
//Restart game - refreshes page and takes gamer back to start menu
//Game over

function restartGame(){
    window.location.reload()
}

let doGameOver = function(ctx) {
    //Clears canvas and redraws to show gameover
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle= "#6a8ccc"
    ctx.font = '120px verdana';
    ctx.fillText("Game Over!", canvas.width/2-350, canvas.height/2);
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