//Methods called on start button click
// 1) Start Game - called once upon initialization of game
// 2) Create Feelings - called once upon initialization of game
// 3) Create Cash - called once upon initialization of game
// 4) Animate - called on every loop; methods called inside function Animate() can be found on functions2.js file

function startGame(){
  // console.log("START");
  
      //Load the Player for the first time
      img = aGirl.character
      img.onload = function() {   
          ctx.drawImage(img, 356,460,spriteWidth/cols, spriteHeight/rows,canvas.width/2, canvas.height*6/7, 60,90);
      };
      
      //Reassign order of divs to get canvas to center and instructions on bottom of screen
      var divs = document.getElementsByTagName("div");
      divs[0].parentNode.appendChild(divs[0]);
      
      //Load all 3 images for Game Lives and push into array
      girlLife1.onload= function() {
        ctx.drawImage(girlLife1,gameLives[0].x,gameLives[0].y,gameLives[0].width,gameLives[0].height)
      }
      girlLife1.src="./images/girl_movements/Idle.png";
      gamelives.push(girlLife1)
      
      girlLife2.onload= function() {
        ctx.drawImage(girlLife2,gameLives[1].x,gameLives[1].y,gameLives[1].width,gameLives[1].height)
      }
      girlLife2.src="./images/girl_movements/Idle.png";
      gamelives.push(girlLife2)
      
      girlLife3.onload= function() {
        ctx.drawImage(girlLife3,gameLives[2].x,gameLives[2].y,gameLives[2].width,gameLives[2].height)
      }
      girlLife3.src="./images/girl_movements/Idle.png";
      gamelives.push(girlLife3)
      
      //Initiate background music once player starts game
      myMusic.stop()
      myBackground.play()

 
      
        
      //Use DOM to change styles for header and paragraph
      document.querySelector("header").innerText=`Score: ${score}`
      document.querySelector("header").style.fontSize="30px"
      document.querySelector("p").style.fontSize="20px"
      document.querySelector("p").style.backgroundColor="black"
      document.querySelector(".game-intro").style.marginTop="0"
      
      //Starts the animation infinite loop which calls on method Animate
      //Once loop initializes it does not stop until animation canceled at variable loop
      window.requestAnimationFrame(animate) 
}
  
function createFeelings(){
      //Interval set to create new Feeling every 3 secounds (3000 milliseconds)
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
      //Interval set to create new Feeling every 2 secounds (2000 milliseconds)
      setInterval(() => {
          var radius = Math.random() * 9 + 2;
          var x = Math.random() * (canvas.width - radius * 2) + radius; //random location for each spawn
          var y = Math.random() * ((canvas.height- 300) - radius * 2) + radius;
          var dx = Math.random() - 0.5 * 2;  //create velocity variable
          var dy = Math.random() - 0.5 * 2;  //randomize initial direction
          cashArray.push(new Cash(x, y, dx, dy, radius))
      }, 2000)
}
  
function animate(){  
      //Initialize global variable to keep track of loop which will be used to stop animation when game over   
      loop = window.requestAnimationFrame(animate);
      
      //Clear and Redraw canvas for animation effect
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundGradient;
      ctx.fillRect(0,0,canvas.width,canvas.height)
      
      //This for loop draw stars from ministar array
      for (var i = 0; i < miniStars.length; i++) {
          miniStars[i].draw();
        }
      
      //Draw mountains
      var sandImage = new Image();
      sandImage.src = './images/sand_newpixel.png';
      var pat1 = ctx.createPattern(sandImage, "repeat");

      var snowImage = new Image();
      snowImage.src = './images/snow.jpeg';
      var pat2 = ctx.createPattern(snowImage, "repeat");

      var grassImage = new Image();
      grassImage.src = './images/grassfinal.png';
      var pat3 = ctx.createPattern(grassImage, "repeat");

      var dirtImage = new Image();
      dirtImage.src = './images/dirt.png';
      var pat4 = ctx.createPattern(dirtImage, "repeat");



      createMountainRange(1, canvas.height - 50, pat2);
      createMountainRange(2, canvas.height - 100,  pat4);
      createMountainRange(3, canvas.height - 300 , pat3);
      
      //Draw ground    
      // ctx.fillStyle = "#FECE90";
      var sandImage = new Image();
      sandImage.src = './images/sand_newpixel.png';
      var pat1 = ctx.createPattern(sandImage, "repeat");
      ctx.fillStyle = pat1;    
      ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);
      
      //Draw player
      aGirl.draw()
      
      //Draw remaining images
      drawFeelings()
      drawCash()
      drawGameLives()

      //Method to check collision between player and objects falling from the top of the canvas, 
      //and checks number of game lives 
      //See method on functions2.js
      checkStatus()
  }//end animate