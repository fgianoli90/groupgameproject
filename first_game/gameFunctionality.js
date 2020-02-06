// function startGame(){
//   // console.log("START");
//   //Load the aGirl for the first time
//   // img = aGirl.character
//   img.onload = function() {   
//       ctx.drawImage(img, 356,460,spriteWidth/cols, spriteHeight/rows,canvas.width/2, canvas.height*6/7, 60,90);
//    };
//   img.src = "./images/girl_movements/final_girl_sprites.png";   
  
  //Load the emojiLives for the first time
  // kimCryEmoji.onload= function() {
  //     ctx.drawImage(kimCryEmoji,emojiLives[0].x,emojiLives[0].y,emojiLives[0].width,emojiLives[0].height)
  // }
  // kimCryEmoji.src="./images/kkimg.png";
  // gamelives.push(kimCryEmoji)
  // jordanCryEmoji.onload= function() {
  //     ctx.drawImage(jordanCryEmoji,emojiLives[1].x,emojiLives[1].y,emojiLives[1].width,emojiLives[1].height)
  // }
  // jordanCryEmoji.src="./images/jordanCry.png";
  // gamelives.push(jordanCryEmoji)
  // northWestCryEmoji.onload= function() {
  //     ctx.drawImage(northWestCryEmoji,emojiLives[2].x,emojiLives[2].y,emojiLives[2].width,emojiLives[2].height)
  // }
  // northWestCryEmoji.src="./images/dawson.png";
  // gamelives.push(northWestCryEmoji)
  
  // drawBoard()

  //Sound Components
  // myWalk = new sound("./audio/trimmed.mp3");
  // myJump = new sound("./audio/jumppp22.ogg");
  // myMoney= new sound("./audio/coin10.wav");
  // myDeath= new sound("./audio/death.wav");
  // myGameEnd= new sound("./audio/round_end.wav")
  // myBackground= new sound("./audio/main_theme_01.wav")
  // myBackground.play()


  //Reassign order of divs to get canvas to center
  // var divs = document.getElementsByTagName("div");
  // divs[0].parentNode.appendChild(divs[0]);
  
  //Use DOM to change styles for header and paragraph
  // document.querySelector("header").innerText=`Score: ${score}`
  // document.querySelector("header").style.fontSize="30px"
  // document.querySelector("p").style.fontSize="20px"
  // document.querySelector("p").style.backgroundColor="black"
  // document.querySelector(".game-intro").style.marginTop="0"

  //Starts the animation infinite loop
  // window.requestAnimationFrame(animate) 
  
}

// function drawBoard(){
//   ctx.fillRect(0,0,canvas.width,canvas.height)
// }

// function drawFeelings(){
//   circleArray.forEach(circle =>{
//       circle.draw()
//       circle.update()
//       })
// }

// function drawCash(){
//   cashArray.forEach(cash =>{
//   cash.draw()
//   cash.update()
//   })
// }

// function createMountainRange(mountainAmount, height,  color) {
//   for (var i = 0; i < mountainAmount; i++) {
//       var mountainWidth = canvas.width / mountainAmount;

//       // Draw triangle
//       ctx.beginPath();
//       ctx.moveTo(i * mountainWidth, canvas.height);
//       ctx.lineTo(i * mountainWidth + mountainWidth + 325, canvas.height);

//       // Triangle peak
//       ctx.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height);
//       ctx.lineTo(i * mountainWidth - 325, canvas.height);
//       ctx.fillStyle = color;
//       ctx.fill();
//       ctx.closePath();
//   }
// }

// function collision(object){ 
//   // console.log("inside crashed")
//   return !(
//         aGirl.x > object.x+object.radius ||
//         aGirl.y > object.y+object.radius ||
//         aGirl.x+aGirl.width < object.x ||
//         aGirl.y+aGirl.height < object.y
//       )
//   }

// function checkStatus() {
      
//       for (let i=0;i<circleArray.length;i++){  
//           if(collision(circleArray[i])){
//               console.log("feelings got me")
//               myBackground.stop()
//               myDeath.play()
//               myGameEnd.play()
//               window.cancelAnimationFrame(loop)
//               // circleArray.splice(i,1) //keeps stopping after 3rd emoji hit
//               i= circleArray.length
//               doGameOver(ctx)
//               console.log("doGameover")
//           }
//       }
      
      // cashArray.forEach(cash => {
      //     if(collision(cash)){
      //     myMoney.play()
      //     cashArray.splice(cashArray.indexOf(cash),1)
      //     score += 10
      //     document.querySelector("header").innerText=`Score: ${score}`
      //     }
      // })
  


// document.onkeydown = function(e) { //controls -- up down left and right ... 
//   switch (e.keyCode) {
//     case 38: if (aGirl.y > canvas.height-130){
//                   aGirl.y-=20;aGirl.moveJump();myWalk.play();//rightArm.y-=20; leftArm.y-=20; console.log('up',  );
//                   break;
//               }else{
//                   aGirl.y=canvas.height-150;aGirl.moveIdle();//rightArm.y-=0; leftArm.y-=0;
//                   break;
//               }
//     case 40: if (aGirl.y <= canvas.height-110){
//                   aGirl.y+=20;aGirl.moveIdle();myWalk.play();//rightArm.y+=20; leftArm.y+=20; //console.log('down',); 
//                   break;
//               }else{
//                   aGirl.y=canvas.height-90;aGirl.moveJump();//rightArm.y+=0; leftArm.y+=0;
//                   break;
//               }

//     case 37: if(aGirl.x >= 20){
//                 if (aGirl.y<canvas.height-150){
//                   aGirl.x-=2;aGirl.moveIdle();
//                 }else{
//                 aGirl.x-=20; aGirl.moveLeft();myWalk.play();//rightArm.x-=20;leftArm.x-=20;//console.log('left',); 
//                 }break;
//               }else {
//               aGirl.x == 0;//rightArm.x===80;rightArm.x===0; break;
//               }
//     case 39: if (aGirl.x <= canvas.width-80){
//                 if (aGirl.y<canvas.height-150){
//                   aGirl.x+=2;aGirl.moveIdle();
//                 }else{
//                   aGirl.x+=20;aGirl.moveRight();myWalk.play();//rightArm.x+=20;leftArm.x+=20; //console.log('right'); 
//               } break;
//               } else {
//               aGirl.x === canvas.width-60;//rightArm.x===canvas.width-30;leftArm.x===canvas.width-110; 
//               break;
//               }
//     case 32: jump();aGirl.moveJump();aGirl.myJump.play()//console.log("space bar hit");
//               break;
              

//     default: aGirl.moveIdle();
    
//   }
// }


// function jump(){
//   let peak = canvas.height-250
//   let ghettoGravity = 1;
//   let j = setInterval(()=>{
//     ghettoGravity-=.05;
//     ghettoGravity = Math.max(0.2, ghettoGravity)
//     aGirl.y-=10*ghettoGravity;
//     if(aGirl.y <peak){
//       clearInterval(j)
//       fall()
//     }
//   },1)
// }
// function fall(){
//   console.log("fall")
//   let ghettoGravity = .2;
//   let k = setInterval(()=>{
//     ghettoGravity+=.05
//     aGirl.y+=10*ghettoGravity;
//     if(aGirl.y >= canvas.height-150){
//       clearInterval(k)
//     }
//   },1)
// }
//Image objects with initial properties declared
// var emojiLives=[
//   {
//     x:canvas.width-140,
//     y:0,
//     width: 40,
//     height: 40
//   },
//   {
//     x:canvas.width-90,
//     y:0,
//     width: 40,
//     height: 40
// },
// {
//   x:canvas.width-40,
//   y:0,
//   width: 40,
//   height: 40
// }]

// let aGirl = {  
//   x:canvas.width / 2,
//   y:canvas.height-90,
//   width: 60,
//   height: 90
// }

//Movements and draw functions
// function toggleRAB(){
//   rab = true;
//   setTimeout(()=>rab=false,200)
// }
// function toggleRRT(){
//   rrt = true;
//   setTimeout(()=>rrt=false,200)
// }
// function toggleRUP(){
//   rup = true;
//   setTimeout(()=>rup=false,200)
// }
// function toggleRDOWN(){
//   rdown = true;
//   setTimeout(()=>rdown=false,200)
// }
// function drawRAB(){
//   rab = true;
//   ctx.drawImage(img3,aGirl.x, aGirl.y, aGirl.width, aGirl.height)
// }
// function drawRRT(){
//   rrt = true;
//   ctx.drawImage(img4,aGirl.x, aGirl.y, aGirl.width, aGirl.height)
// }
// function drawRUP(){
//   rup = true;
//   ctx.drawImage(img5,aGirl.x, aGirl.y, aGirl.width, aGirl.height)
// }
// function drawRDOWN(){
//   rdown = true;
//   ctx.drawImage(img6,aGirl.x, aGirl.y, aGirl.width, aGirl.height)

// function drawBag() {
//   ctx.drawImage(img, aGirl.x, aGirl.y, aGirl.width, aGirl.height); //draws the aGirl depending on the coords in the obj above 
// }
// function drawGameLives(){
//   for (i=0;i<emojiLives.length;i++){
//     ctx.drawImage(gamelives[i], emojiLives[i].x, emojiLives[i].y, emojiLives[i].width, emojiLives[i].height)
//   }
// }

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
  
  })
  