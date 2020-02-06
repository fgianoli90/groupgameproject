function drawBoard(){
  ctx.fillRect(0,0,canvas.width,canvas.height)
}

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
  // console.log("inside crashed")
  return !(
        aGirl.x > object.x+object.radius ||
        aGirl.y > object.y+object.radius ||
        aGirl.x+aGirl.width < object.x ||
        aGirl.y+aGirl.height < object.y
      )
  }

function checkStatus() {
  console.log("checkStatus")
      
      for (let i=0;i<circleArray.length;i++){  
        if(collision(circleArray[i])){
              // console.log("feelings got me")
              myDeath.play()
              // myBackground.stop()
              // myGameEnd.play()
              // window.cancelAnimationFrame(loop)
              circleArray.splice(i,1) //keeps stopping after 3rd emoji hit
              // i= circleArray.length
              // doGameOver(ctx)
              emojiLives.pop()
              numOfLives++
              }
            }
          
      
      
      cashArray.forEach(cash => {
          if(collision(cash)){
          myMoney.play()
          cashArray.splice(cashArray.indexOf(cash),1)
          score += 10
          document.querySelector("header").innerText=`Score: ${score}`
          }
      })

      if (numOfLives>=3){
        myBackground.stop()
        myGameEnd.play()
        window.cancelAnimationFrame(loop)
        doGameOver(ctx)
        
      }
}


