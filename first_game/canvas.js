let white=false

document.querySelector('#start-button').onclick = function(){
    this.remove(); //removes start button
    startGame(); //calls startGame  
     white = true
     init()
     init2()
     animate()
    // drawBoard()
  };

var canvas = document.querySelector('canvas');  // associates canvas tag with canvas new var

canvas.width = window.innerWidth; // Sets our canvas to browsers current dimensions
canvas.height = window.innerHeight/1.5;

var ctx = canvas.getContext('2d');
var img = new Image(); //load an image element
var img1 = new Image();
var img2 = new Image();
let loop=window.requestAnimationFrame(animate)

function startGame(){
    console.log("START");
    img.onload = function() {  //Load the moneyBag for the first time 
       ctx.drawImage(img, moneyBag.x, moneyBag.y, moneyBag.width, moneyBag.height);
    };
    img.src = "./images/moneybag.jpg";
    // img1.onload = function() {  //Load the moneyBag for the first time 
    //     ctx.drawImage(img1, moneyBag.x, moneyBag.y, moneyBag.width, moneyBag.height);
    //  };
    //  img1.src = "./images/image-cartoon-human-gloves-hand-arm.jpg";
     img2.onload = function() {  //Load the moneyBag for the first time 
        ctx.drawImage(img2, moneyBag.x, moneyBag.y, moneyBag.width, moneyBag.height);
     };
     img2.src = "./images/right-slant-up.jpg";
    drawBoard()
    var divs = document.getElementsByTagName("div");
    divs[0].parentNode.appendChild(divs[0]);  
    window.requestAnimationFrame(animate) //Starts the animation infinite loop
  }

function drawBoard(){
    ctx.fillStyle= "white";
    ctx.fillRect(0,0,canvas.width,canvas.height)
}

let moneyBag = {  
    x:canvas.width / 2,
    y:canvas.height * 6/7,
    width: 50,
    height: 80
  }
let rightArm = {  
    x:(canvas.width / 2)+50,
    y:(canvas.height * 6/7)-30,
    width: 30,
    height: 80
  }

function drawRAC(){
    ctx.drawImage(img2,rightArm.x,rightArm.y,rightArm.width,rightArm.height);
}

let img3=new Image()
img3.src="./images/block-left.jpg"
let rab = false; 

function toggleRAB(){
    rab = true;
    setTimeout(()=>rab=false,2000)
}

function drawRAB(){
    //rab = true
    ctx.drawImage(img3,rightArm.x,rightArm.y,rightArm.width,rightArm.height)
}
  
function drawBag() {
    ctx.drawImage(img, moneyBag.x, moneyBag.y, moneyBag.width, moneyBag.height); //draws the moneyBag depending on the coords in the obj above 
  }
  
var mouse = {
    x: undefined,
    y: undefined
}

// var maxRadius = 40; //relevant to shrinking and growing affect
// var minRadius = 5;

var feelingsArray = [];
var moneyArray = [];






// colorArray[0] = new Image();
// colorArray[0].src = './images/smiley.png';


// Feelings Array
let smiley = new Image();
smiley.src = './images/smiley.png';
feelingsArray.push(smiley);

let smiley2 = new Image();
smiley2.src = './images/heart-eyes.png';
feelingsArray.push(smiley2);

let hearts = new Image();
hearts.src = './images/hearts.png';
feelingsArray.push(hearts);



///////Money Array
let moneyEmoji = new Image();
moneyEmoji.src = './images/money.png';
moneyArray.push(moneyEmoji);

let moneyWings = new Image();
moneyWings.src = './images/moneywings.png';
moneyArray.push(moneyWings);



// ///// Array Logic
// var arrArray = [rand1, rand2]

// var rand1 = feelingsArray[Math.floor(Math.random() * feelingsArray.length)];
// var rand2 = moneyArray[Math.floor(Math.random() * moneyArray.length)];


//Event Listeners
window.addEventListener('mousemove', 
function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse)
})

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth; // Sets our canvas to browsers current dimensions
    canvas.height = window.innerHeight;

    init();
    init2();
    })

let gameWidth = canvas.width
let gameHeight = canvas.height






function Circle(x, y, dx, dy, radius){
        this.x = x;
        this.y = 10;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.stroke = feelingsArray[Math.floor(Math.random() * feelingsArray.length)];
        this.color = feelingsArray[Math.floor(Math.random() * feelingsArray.length)];
        this.image = feelingsArray[Math.floor(Math.random() * feelingsArray.length)]; 
        this.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            // ctx.strokeStyle = 'blue';
            ctx.stroke();
            ctx.strokeStyle = this.stroke;
            // ctx.fillStyle = this.color;
            // ctx.fill();
            ctx.drawImage(this.image, this.x - 24, this.y - 24, 50, 50)
        };
        this.update = function(){
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0){   
                this.dx = -this.dx
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0){   
                this.dy = -this.dy
            }
            this.x += this.dx;
            this.y += this.dy;       
            this.draw();
        }
    }

//declare animate function and request itself to create the loop
var circleArray = [];

function init(){
   for (var i = 0; i < 10; i++){
        var radius = Math.random() * 9 + 2;
        var x = Math.random() * (innerWidth - radius * 2) + radius;   //random location for each spawn
        var y = Math.random() * ((innerHeight- 300) - radius * 2) + radius;
        var dx = Math.random() - 0.5 * 2;   //create velocity variable
        var dy = Math.random() - 0.5 * 2;  //randomize initial direction
        // create a radius var so the bouce off the wall is cleaner
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
console.log(circleArray)
}


//second "Circle" function added
function Cash(x, y, dx, dy, radius){
    this.x = x;
    this.y = 10;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.stroke = feelingsArray[Math.floor(Math.random() * feelingsArray.length)];
    this.color = feelingsArray[Math.floor(Math.random() * feelingsArray.length)];
    this.image = moneyArray[Math.floor(Math.random() * moneyArray.length)]; 
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.strokeStyle = 'blue';
        ctx.stroke();
        ctx.strokeStyle = this.stroke;
        // ctx.fillStyle = this.color;
        // ctx.fill();
        ctx.drawImage(this.image, this.x - 24, this.y - 24, 50, 50)
    };
    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){   
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){   
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;


        // this part of our code has the zoom-in and zoom out affect
        // if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y -this.y > -50){  
        //     if(this.radius < maxRadius){
        //         this.radius += 1;
        //     }
                
        // } else if (this.radius > minRadius){
        //     this.radius -= 1;
        // }
        this.draw();
    }
}

//declare animate function and request itself to create the loop
var cashArray = [];

function init2(){
    for (var i = 0; i < 30; i++){
         var radius = Math.random() * 9 + 2;
         var x = Math.random() * (innerWidth - radius * 2) + radius;   //random location for each spawn
         var y = Math.random() * ((innerHeight- 300) - radius * 2) + radius;
         var dx = Math.random() - 0.5 * 2;   //create velocity variable
         var dy = Math.random() - 0.5 * 2;  //randomize initial direction
         // create a radius var so the bouce off the wall is cleaner
         cashArray.push(new Cash(x, y, dx, dy, radius));
     }
 console.log(cashArray)
 }

function animate(){
loop=requestAnimationFrame(animate);
ctx.clearRect(0, 0, innerWidth, innerHeight);
if (white){
     drawBoard()
     drawBag()
     drawRAC()
     checkGameOver()
     checkScore()
}
if(rab){
    drawRAB()
}
for (var i = 0; i < circleArray.length; i++){
    circleArray[i].update();
}
for (var i = 0; i < cashArray.length; i++){
    cashArray[i].update();
}


// init();
// animate();
document.onkeydown = function(e) { //controls -- up down left and right ... 
    switch (e.keyCode) {
      case 38: moneyBag.y-=20;rightArm.y-=20; console.log('up',  ); break;
      case 40: moneyBag.y+=20;rightArm.y+=20; console.log('down',); break;
      case 37: if (moneyBag.x > 50){
        moneyBag.x-=20; rightArm.x-=20;console.log('left',); break;}
        else {
          moneyBag.x === 0;rightArm.x===50; break;
        }
      case 39: if (moneyBag.x <= canvas.width-100){
          moneyBag.x+=20;rightArm.x+=20; console.log('right'); break;
      } else {
        moneyBag.x === canvas.width-80;rightArm.x===canvas.width-30; break;
      }
      case 32: toggleRAB();console.log("space bar hit");break;
    }
  }
  function crashWith(feeling){ 
    console.log("inside crashed")
    return !(
          moneyBag.x > feeling.x+feeling.radius ||
          moneyBag.y > feeling.y+feeling.radius ||
          moneyBag.x+moneyBag.width < feeling.x ||
          moneyBag.y+moneyBag.height < feeling.y
        );
  }
  function checkGameOver() {
    
    var crashed = circleArray.some(function(feeling) {
      return crashWith(feeling);
    });
    console.log(crashed)
    if (crashed) {
        window.cancelAnimationFrame(loop)
        
    } 
  }
  function scoreWith(cash){ 
    console.log("Stackin' Paper")
    return !(
          moneyBag.x > cash.x+cash.radius ||
          moneyBag.y > cash.y+cash.radius ||
          moneyBag.x+moneyBag.width < cash.x ||
          moneyBag.y+moneyBag.height < cash.y
        );
  }
  function checkScore() {
    
    var scored = cashArray.some(function(cash) {
      return scoreWith(cash);
    });
    console.log(scored)
    if (scored) {
        cashArray.remove(cash);
        cashArray.update();
        
    } 
  }

}
