
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
    console.log("fall")
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
document.onkeydown = function(e) { //controls -- up down left and right ... 
  switch (e.keyCode) {
    case 38: if (aGirl.y >= canvas.height-110){
                aGirl.y-=20;aGirl.moveIdle();myWalk.play();//console.log('up',  );
                break;
                }else{
                aGirl.y=canvas.height-150; aGirl.moveIdle();
                break;
              }
    case 40: if (aGirl.y < canvas.height-160){
                inAir=true; aGirl.moveJump()
             } else {
             if (aGirl.y <= canvas.height-110){
                aGirl.y+=20;aGirl.moveIdle();myWalk.play();//console.log('down',); 
                break;
              }else{
                aGirl.y=canvas.height-90;aGirl.moveIdle();
                break;
              }}

    case 37: if(aGirl.x >= 2){
                if (aGirl.y<canvas.height-160){
                aGirl.x-=2;aGirl.moveJump();
                }else{
                aGirl.moveLeft();myWalk.play();//console.log('left',);  aGirl.x-=20;
                }break;
              }else {
                aGirl.x == 0;break;
              }
    case 39: if (aGirl.x <= canvas.width-62){
                if (aGirl.y<canvas.height-160){
                    aGirl.x+=2;aGirl.moveJump();
                }else{
                  aGirl.moveRight();myWalk.play();//console.log('right'); aGirl.x+=20;
              } break;
              } else {
                aGirl.x === canvas.width-60;aGirl.moveIdle()
              break;
              }
    case 32: jump(); aGirl.moveJump(); myJump.play()//console.log("space bar hit");
              break;
    
  }
}
