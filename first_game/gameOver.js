//var canvas = document.querySelector('canvas');  // associates canvas tag with canvas new var

//canvas.width = window.innerWidth; // Sets our canvas to browsers current dimensions
//canvas.height = window.innerHeight/1.5;

//var ctx = canvas.getContext('2d');

 var doGameOver = function(ctx){
   // ctx.clearRect(0,0,canvas.width, canvas.height)
   
    ctx.font = '48px serif';
    ctx.fillText('Game Over',200,204,);
   // ctx.fillText("you got feelings")
    ctx.fillStyle = "white";
    
 };
 var btn = document.createElement("BUTTON");
 btn.innerHTML = "Restart";
 
 document.body.appendChild(btn);
 

  document.querySelector("body > button").onclick = function(){
    moneyBag.x = canvas.width / 2;
    moneyBag.y = canvas.height * 6/7;
    rightArm.x=canvas.width / 2+50;
    rightArm.y=canvas.height * 6/7-30;
    leftArm.x= canvas.width / 2-30;
    leftArm.y= canvas.height * 6/7-30;

    // ctx.rightArm(canvas.width / 2+50,canvas.height * 6/7-30, 30, 80)
    // ctx.leftArm((canvas.width / 2)-30,(canvas.height * 6/7)-30,30, 80)
   
      
   // this.remove()
   startGame(); //calls startGame  
  // createFeelings();
  //  createCash();
   
 }
