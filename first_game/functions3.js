 
document.onkeydown = function(e) { //controls -- up down left and right ... 
  switch (e.keyCode) {
    case 38: if (aGirl.y > canvas.height-130){
                  aGirl.y-=20;aGirl.moveJump();myWalk.play();//rightArm.y-=20; leftArm.y-=20; console.log('up',  );
                  break;
              }else{
                  aGirl.y=canvas.height-150;aGirl.moveIdle();//rightArm.y-=0; leftArm.y-=0;
                  break;
              }
    case 40: if (aGirl.y <= canvas.height-110){
                  aGirl.y+=20;aGirl.moveIdle();myWalk.play();//rightArm.y+=20; leftArm.y+=20; //console.log('down',); 
                  break;
              }else{
                  aGirl.y=canvas.height-90;aGirl.moveJump();//rightArm.y+=0; leftArm.y+=0;
                  break;
              }

    case 37: if(aGirl.x >= 20){
                if (aGirl.y<canvas.height-150){
                  aGirl.x-=2;aGirl.moveIdle();
                }else{
                aGirl.x-=20; aGirl.moveLeft();myWalk.play();//rightArm.x-=20;leftArm.x-=20;//console.log('left',); 
                }break;
              }else {
              aGirl.x == 0;//rightArm.x===80;rightArm.x===0; break;
              }
    case 39: if (aGirl.x <= canvas.width-80){
                if (aGirl.y<canvas.height-150){
                  aGirl.x+=2;aGirl.moveIdle();
                }else{
                  aGirl.x+=20;aGirl.moveRight();myWalk.play();//rightArm.x+=20;leftArm.x+=20; //console.log('right'); 
              } break;
              } else {
              aGirl.x === canvas.width-60;//rightArm.x===canvas.width-30;leftArm.x===canvas.width-110; 
              break;
              }
    case 32: jump();aGirl.moveJump();Jump.play()//console.log("space bar hit");
              break;
              

    default: aGirl.moveIdle();
    
  }
}
  
  
function jump(){
  let peak = canvas.height-250
  let ghettoGravity = 1;
  let j = setInterval(()=>{
    ghettoGravity-=.05;
    ghettoGravity = Math.max(0.2, ghettoGravity)
    aGirl.y-=10*ghettoGravity;
    if(aGirl.y <peak){
      clearInterval(j)
      fall()
    }
  },1)
}
function fall(){
  console.log("fall")
  let ghettoGravity = .2;
  let k = setInterval(()=>{
    ghettoGravity+=.05
    aGirl.y+=10*ghettoGravity;
    if(aGirl.y >= canvas.height-150){
      clearInterval(k)
    }
  },1)
}
  
  
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
  // }
  function drawGirl() {
    ctx.drawImage(img, aGirl.x, aGirl.y, aGirl.width, aGirl.height); //draws the aGirl depending on the coords in the obj above 
  }
  function drawGameLives(){
    for (i=0;i<emojiLives.length;i++){
      ctx.drawImage(gamelives[i], emojiLives[i].x, emojiLives[i].y, emojiLives[i].width, emojiLives[i].height)
    }
  }