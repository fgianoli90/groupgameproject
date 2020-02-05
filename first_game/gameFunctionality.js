function startGame(){
  // console.log("START");
  //Load the avatarGirl for the first time
  img.onload = function() {   
     ctx.drawImage(img, avatarGirl.x, avatarGirl.y, avatarGirl.width, avatarGirl.height);
  };
  img.src = "./images/girl_movements/Idle.png";   
  
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
  
  drawBoard()

  //Sound Components
  myWalk = new sound("./audio/trimmed.mp3");
  myJump = new sound("./audio/jumppp22.ogg");
  myMoney= new sound("./audio/coin10.wav");
  myDeath= new sound("./audio/death.wav");
  myGameEnd= new sound("./audio/round_end.wav")
  myBackground= new sound("./audio/dance.mp3")
  myBackground.play()


  //Reassign order of divs to get canvas to center
  var divs = document.getElementsByTagName("div");
  divs[0].parentNode.appendChild(divs[0]);
  
  //Use DOM to change styles for header and paragraph
  document.querySelector("header").innerText=`Score: ${score}`
  document.querySelector("header").style.fontSize="30px"
  document.querySelector("p").style.fontSize="20px"
  document.querySelector("p").style.backgroundColor="black"
  document.querySelector(".game-intro").style.marginTop="0"

  //Starts the animation infinite loop
  window.requestAnimationFrame(animate) 
  
}

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
  for (var i = 0; i < mountainAmount; i++) {
      var mountainWidth = canvas.width / mountainAmount;

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
        avatarGirl.x > object.x+object.radius ||
        avatarGirl.y > object.y+object.radius ||
        avatarGirl.x+avatarGirl.width < object.x ||
        avatarGirl.y+avatarGirl.height < object.y
      )
  }

let numOfLives=0  
function checkStatus() {
      
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

document.onkeydown = function(e) { //controls -- up down left and right ... 
  switch (e.keyCode) {
    case 38: if (avatarGirl.y > canvas.height-130){
                  avatarGirl.y-=20;toggleRUP();myWalk.play();//rightArm.y-=20; leftArm.y-=20; console.log('up',  );
                  break;
              }else{
                  avatarGirl.y=canvas.height-150;//rightArm.y-=0; leftArm.y-=0;
                  break;
              }
    case 40: if (avatarGirl.y <= canvas.height-110){
                  avatarGirl.y+=20;toggleRDOWN();myWalk.play();//rightArm.y+=20; leftArm.y+=20; //console.log('down',); 
                  break;
              }else{
                  avatarGirl.y=canvas.height-90;//rightArm.y+=0; leftArm.y+=0;
                  break;
              }

    case 37: if(avatarGirl.x >= 20){
                if (avatarGirl.y<canvas.height-150){
                  avatarGirl.x-=3;inAir=true;toggleRRT();
                }else{
                avatarGirl.x-=20; toggleRAB();myWalk.play();//rightArm.x-=20;leftArm.x-=20;//console.log('left',); 
                }break;
              }else {
              avatarGirl.x == 0;//rightArm.x===80;rightArm.x===0; break;
              }
    case 39: if (avatarGirl.x <= canvas.width-80){
                if (avatarGirl.y<canvas.height-150){
                  avatarGirl.x+=3;inAir=true; toggleRRT();
                }else{
                  avatarGirl.x+=20;toggleRRT();myWalk.play();//rightArm.x+=20;leftArm.x+=20; //console.log('right'); 
              } break;
              } else {
              avatarGirl.x === canvas.width-60;//rightArm.x===canvas.width-30;leftArm.x===canvas.width-110; 
              break;
              }
    case 32: if (!(avatarGirl.y < canvas.height-150)){jump();myJump.play()//console.log("space bar hit");
              break;
              }
  }
}


function jump(){
  let peak = canvas.height-250
  let ghettoGravity = 1;
  let j = setInterval(()=>{
    ghettoGravity-=.05;
    ghettoGravity = Math.max(0.2, ghettoGravity)
    avatarGirl.y-=20*ghettoGravity;
    if(avatarGirl.y <peak || inAir){
      clearInterval(j)
      fall()
    }
  },1)
}
function fall(){
  let ghettoGravity = .5;
  let k = setInterval(()=>{
    ghettoGravity+=.05
    avatarGirl.y+=25*ghettoGravity;
    if(avatarGirl.y >= canvas.height-150){
      clearInterval(k)
      inAir=false;
    }
  },1)
}
//Image objects with initial properties declared
var emojiLives=[
  {
    x:canvas.width-140,
    y:0,
    width: 40,
    height: 40
  },
  {
    x:canvas.width-90,
    y:0,
    width: 40,
    height: 40
},
{
  x:canvas.width-40,
  y:0,
  width: 40,
  height: 40
}]

let avatarGirl = {  
  x:canvas.width / 2,
  y:canvas.height-90,
  width: 60,
  height: 90
}

//Movements and draw functions
function toggleRAB(){
  rab = true;
  setTimeout(()=>rab=false,200)
}
function toggleRRT(){
  rrt = true;
  setTimeout(()=>rrt=false,200)
}
function toggleRUP(){
  rup = true;
  setTimeout(()=>rup=false,200)
}
function toggleRDOWN(){
  rdown = true;
  setTimeout(()=>rdown=false,200)
}
function drawRAB(){
  rab = true;
  ctx.drawImage(img3,avatarGirl.x, avatarGirl.y, avatarGirl.width, avatarGirl.height)
}
function drawRRT(){
  rrt = true;
  ctx.drawImage(img4,avatarGirl.x, avatarGirl.y, avatarGirl.width, avatarGirl.height)
}
function drawRUP(){
  rup = true;
  ctx.drawImage(img5,avatarGirl.x, avatarGirl.y, avatarGirl.width, avatarGirl.height)
}
function drawRDOWN(){
  rdown = true;
  ctx.drawImage(img6,avatarGirl.x, avatarGirl.y, avatarGirl.width, avatarGirl.height)
}
function drawBag() {
  ctx.drawImage(img, avatarGirl.x, avatarGirl.y, avatarGirl.width, avatarGirl.height); //draws the avatarGirl depending on the coords in the obj above 
}
function drawGameLives(){
  for (i=0;i<emojiLives.length;i++){
    ctx.drawImage(gamelives[i], emojiLives[i].x, emojiLives[i].y, emojiLives[i].width, emojiLives[i].height)
  }
}

//Event Listeners
window.addEventListener('mousemove', //Is it in current use?
function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse)
})

window.addEventListener('resize', function(){
  canvas.width = window.outerWidth/1.5; // Sets our canvas to browsers current dimensions
  canvas.height = window.outerHeight/1.8;
  drawFeelings();
  drawCash();
  })