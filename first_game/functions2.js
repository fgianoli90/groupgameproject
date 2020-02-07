//Methods called in each loop of animate method
// 1) Function to draw feelings which are the emojis
// 2) Function to draw cash which are the coins
// 3) Function to draw game lives that appear on the upper right corner of the canvas
// 4) Function to draw mountain range on to canvas
// 5) Function to check collision of player and obect passed to the function
// 6) Function that checks for collisions so to eliminate object collided with and check game lives for game over

function drawFeelings(){
    circleArray.forEach(circle =>{
        circle.draw()
        circle.update()
        })
}

function drawCash(){
    cashArray.forEach(cash =>{
    cash.draw()
    cash.update()
    })
}

function drawGameLives(){
    for (i=0;i<gameLives.length;i++){
      ctx.drawImage(gamelives[i], gameLives[i].x, gameLives[i].y, gameLives[i].width, gameLives[i].height)
    }
}

function createMountainRange(mountainAmount, height,  color) {
    for (let i = 0; i < mountainAmount; i++) {
        let mountainWidth = canvas.width / mountainAmount;

        // Draw triangle
        ctx.beginPath();
        ctx.moveTo(i * mountainWidth, canvas.height);
        ctx.lineTo(i * mountainWidth + mountainWidth + 325, canvas.height);

        // Triangle peak
        ctx.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height);
        ctx.lineTo(i * mountainWidth - 325, canvas.height);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
}

function collision(object){ 
    return !(
        aGirl.x > object.x+object.radius ||     //checks for collision on right side of object
        aGirl.y > object.y+object.radius ||     //checks for collision on bottom of object
        aGirl.x+60 < object.x-object.radius ||  //checks for collision on left side of object
        aGirl.y+90 < object.y-object.radius     //checks for collision on top of object
    )
  }

function checkStatus() {
    
  //Loop that checks collision for each object that is a feeling and takes a game life away 
  //also included is a counter to keep track of game lives lost
    for (let i=0;i<circleArray.length;i++){  
        if(collision(circleArray[i])){
            myDeath.play()
            circleArray.splice(i,1)
            gameLives.pop()
            numOfLives++
        }
    }
  //Loop that checks collision for each object that is cash and adds 10 points to score        
    cashArray.forEach(cash => {
        if(collision(cash)){
          myMoney.play()
          cashArray.splice(cashArray.indexOf(cash),1)
          score += 10
          document.querySelector("header").innerText=`Score: ${score}`
        }
    })
  //Statement to check counter for number of game lives taken and if 3 or more then stops game 
  //and calls method for game over
    if (numOfLives>=3){
        myBackground.loop = false;
        myGameEnd.play()
        window.cancelAnimationFrame(loop)
        doGameOver(ctx) //See gameOver.js
    }
}


