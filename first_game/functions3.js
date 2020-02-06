var goLeft=false
var goRight=false
document.onkeydown = function(e) { //controls -- up down left and right ... 
    switch (e.keyCode) {
      case 38: if(avatarGirl.y < canvas.height-150){
                    inAir=true
                }else{
                    if (avatarGirl.y > canvas.height-130){
                    avatarGirl.y-=20;moveIdle();myWalk.play();// console.log('up',  );
                    break;
                }else{
                    avatarGirl.y=canvas.height-150;
                    break;
                }}
      case 40:  if(avatarGirl.y < canvas.height-150){
                    inAir=false
                }else{
                if (avatarGirl.y <= canvas.height-110){
                    avatarGirl.y+=20;moveIdle();myWalk.play();//console.log('down',); 
                    break;
                }else{
                    avatarGirl.y=canvas.height-90;
                    break;
                }}
  
      case 37: if(avatarGirl.x >= 20){
                  if (avatarGirl.y<canvas.height-150){
                    avatarGirl.x-=3;goLeft=true;//avatarGirl.moveJump();
                  }else{
                  avatarGirl.x-=20; moveLeft();myWalk.play();//console.log('left',); 
                  }break;
                }else {
                avatarGirl.x == 0;break;
                }
      case 39: if (avatarGirl.x <= canvas.width-80){
                  if (avatarGirl.y<canvas.height-150){
                    avatarGirl.x+=3;goLeft=true; moveJump();
                  }else{
                    avatarGirl.x+=20;moveRight();myWalk.play();//console.log('right'); 
                } break;
                } else {
                avatarGirl.x === canvas.width-60; 
                break;
                }
      case 32: if (!(avatarGirl.y < canvas.height-150)){jump();myJump.play()//console.log("jump");
                break;
                }
    }
  }
  
  
  function jump(){
    let peak = canvas.height-250
    let ghettoGravity = 1;
    let j = setInterval(()=>{
      moveJump()
      ghettoGravity-=.05;
      ghettoGravity = Math.max(0.2, ghettoGravity)
      avatarGirl.y-=20*ghettoGravity;
      if (goRight){
          avatarGirl.x+=3
          goRight=false
      }
      if (goLeft){
          avatarGirl.x-=3
          goLeft=false
      }
      if(avatarGirl.y <peak || inAir){
        clearInterval(j)
        fall()
      }
    },1)
  }
  function fall(){
    let ghettoGravity = .5;
    let k = setInterval(()=>{
     moveIdle()
      ghettoGravity+=.05
      avatarGirl.y+=25*ghettoGravity;
    //   if (goRight){
    //     avatarGirl.x+=2
    //     goRight=false
    // }
    // if (goLeft){
    //     avatarGirl.x-=2
    //     goLeft=false
    // }
      if(avatarGirl.y >= canvas.height-150){
        clearInterval(k)
        inAir=false;
      }
    },1)
  }
  
function moveLeft(){
    left = true; 
    right = false; 
    idle = false;
    jump = false;
    newGirl.updateFrame()
}
			
function moveRight(){
	left = false;
    right = true; 
    idle = false;
    jump = false;
    newGirl.updateFrame()
}

function moveIdle(){
	left = false; 
    right = false; 
    idle = true;
    jump = false;
    newGirl.updateFrame()
}
			
function moveJump(){
    left = false;
    right = false; 
    idle = false;
    jump = true;
    newGirl.updateFrame()
}    
  
  //Movements and draw functions
//   function toggleRAB(){
//     rab = true;
//     setTimeout(()=>rab=false,200)
//   }
//   function toggleRRT(){
//     rrt = true;
//     setTimeout(()=>rrt=false,200)
//   }
//   function toggleRUP(){
//     rup = true;
//     setTimeout(()=>rup=false,200)
//   }
//   function toggleRDOWN(){
//     rdown = true;
//     setTimeout(()=>rdown=false,200)
//   }
//   function drawRAB(){
//     rab = true;
//     ctx.drawImage(img3,avatarGirl.x, avatarGirl.y, avatarGirl.width, avatarGirl.height)
//   }
//   function drawRRT(){
//     rrt = true;
//     ctx.drawImage(img4,avatarGirl.x, avatarGirl.y, avatarGirl.width, avatarGirl.height)
//   }
//   function drawRUP(){
//     rup = true;
//     ctx.drawImage(img5,avatarGirl.x, avatarGirl.y, avatarGirl.width, avatarGirl.height)
//   }
//   function drawRDOWN(){
//     rdown = true;
//     ctx.drawImage(img6,avatarGirl.x, avatarGirl.y, avatarGirl.width, avatarGirl.height)
//   }
  
 