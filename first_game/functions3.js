//Player mobility 
// 1) Jump - function called when space bar hit for player to jump; incorporates a multiplier for gravity effect
// 2) Fall - function called either once peak is reached or if player presses down key while in air; incorporates a multiplier for gravity effect
// 3) On key down events that give player control of movements 

function jump(){
    let peak = canvas.height-250
    let ghettoGravity = 1;
    let j = setInterval(()=>{
        ghettoGravity-=.05;
        ghettoGravity = Math.max(0.2, ghettoGravity)
        aGirl.y-=10*ghettoGravity;
        if(aGirl.y < peak || inAir){
            clearInterval(j)
            fall()
        }
    },1)
}
function fall(){
    let ghettoGravity = .2;
    let k = setInterval(()=>{
        aGirl.moveIdle()
        ghettoGravity+=.05
        aGirl.y+=10*ghettoGravity;
        if(aGirl.y > canvas.height-160){
           clearInterval(k)
           inAir=false
        }
    },1)
}
document.onkeydown = function(e) { //controls -- up, down, left, and right ... 
  switch (e.keyCode) {
    case 38: if (aGirl.y >= canvas.height-110){                 //console.log('up',  );
                aGirl.y-=20;aGirl.moveIdle();myWalk.play();
                break;
                }else if(aGirl.y < canvas.height-150 && !inAir){
                aGirl.y-=2;aGirl.moveJump();
                }else{
                aGirl.y=canvas.height-150; aGirl.moveIdle();
                break;
              }
    case 40: if (aGirl.y < canvas.height-160){                  //console.log('down',); 
                inAir=true; aGirl.moveIdle()
             } else {
             if (aGirl.y <= canvas.height-110){
                aGirl.y+=20;aGirl.moveIdle();myWalk.play();
                break;
              }else{
                aGirl.y=canvas.height-90;aGirl.moveIdle();
                break;
              }}
              
    case 37: if (aGirl.y<canvas.height-160){                    //console.log('left',)
                    aGirl.x-=2;aGirl.moveJump();
                    break;
                }else{
                    aGirl.moveLeft();
                    break;
                }
                
    case 39: if (aGirl.y<canvas.height-160){                    //console.log('right')
                    aGirl.x+=2;aGirl.moveJump();
                    break;
                }else{
                    aGirl.moveRight();
                    break;
                }
              
    case 32: if (!inAir){                                       //console.log('Jump')
                jump(); aGirl.moveJump(); myJump.play()
                break;
            }
  }
}


