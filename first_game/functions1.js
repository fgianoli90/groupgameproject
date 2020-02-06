myMusic = new sound("./audio/dance.mp3");
myMusic.play();

//Functions on start button click
function startGame(){
    // console.log("START");
    //Load the avatarGirl for the first time
    // img.onload = function() {   
    //    ctx.drawImage(img, avatarGirl.x, avatarGirl.y, avatarGirl.width, avatarGirl.height);
    // };
    // img.src = "./images/girl_movements/Idle.png";   
     
    //Load the emojiLives for the first time
    girlLife1.onload= function() {
        ctx.drawImage(girlLife1,emojiLives[0].x,emojiLives[0].y,emojiLives[0].width,emojiLives[0].height)
    }
    girlLife1.src="./images/girl_movements/Idle.png";
    gamelives.push(girlLife1)
    girlLife2.onload= function() {
        ctx.drawImage(girlLife2,emojiLives[1].x,emojiLives[1].y,emojiLives[1].width,emojiLives[1].height)
    }
    girlLife2.src="./images/girl_movements/Idle.png";
    gamelives.push(girlLife2)
    girlLife3.onload= function() {
        ctx.drawImage(girlLife3,emojiLives[2].x,emojiLives[2].y,emojiLives[2].width,emojiLives[2].height)
    }
    girlLife3.src="./images/girl_movements/Idle.png";
    gamelives.push(girlLife3)
      
  ////drawBoard()
    //Sound Components
    myWalk = new sound("./audio/footsteps.mp3");
    myJump = new sound("./audio/jumppp22.ogg");
    myMoney= new sound("./audio/coin10.wav");
    myDeath= new sound("./audio/death.wav");
    myGameEnd= new sound("./audio/round_end.wav")
    myBackground= new sound("./audio/dance.mp3")
    myBackground.play()
      
    //Use DOM to change styles for header and paragraph
    document.querySelector("header").innerText=`Score: ${score}`
    document.querySelector("header").style.fontSize="30px"
    document.querySelector("p").style.fontSize="20px"
    document.querySelector("p").style.backgroundColor="black"
    document.querySelector(".game-intro").style.marginTop="0"
    
    //Starts the animation infinite loop
    window.requestAnimationFrame(animate) 
    
  }
  
  function createFeelings(){
      setInterval(() => {
          var radius = Math.random() * 9 + 2;
          var x = Math.random() * (canvas.width - radius * 2) + radius;   //random location for each spawn
          var y = Math.random() * ((canvas.height- 300) - radius * 2) + radius;
          var dx = Math.random() - 0.5 * 2;   //create velocity variable
          var dy = Math.random() - 0.5 * 2;  //randomize initial direction
          circleArray.push(new Circle(x, y, dx, dy, radius));
      }, 3000);
    }
  
  function createCash(){
  setInterval(() => {
      var radius = Math.random() * 9 + 2;
      var x = Math.random() * (canvas.width - radius * 2) + radius;   //random location for each spawn
      var y = Math.random() * ((canvas.height- 300) - radius * 2) + radius;
      var dx = Math.random() - 0.5 * 2;   //create velocity variable
      var dy = Math.random() - 0.5 * 2;  //randomize initial direction
      cashArray.push(new Cash(x, y, dx, dy, radius))
  }, 2000)
  }
  
  function animate(){ //start animate 
      
  loop = window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = backgroundGradient;
  drawBoard()
  //Draw stars
  for (var i = 0; i < miniStars.length; i++) {
      miniStars[i].draw();
    }
//Draw mountains
  createMountainRange(1, canvas.height - 50, "#fff");
  createMountainRange(2, canvas.height - 100,  "#669999");
  createMountainRange(3, canvas.height - 300 , "#00CCFF");
//Draw ground    
  ctx.fillStyle = "#FECE90";
  ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);
  
  drawGirl()
  drawFeelings()
  drawCash()
  drawGameLives()
  checkStatus()
  
  //Player movement status checker
//   if(rab){drawRAB()}
//   if(rrt){drawRRT()}
//   if(rup){drawRUP()}
//   if(rdown){drawRDOWN()}
  
  }//end animate