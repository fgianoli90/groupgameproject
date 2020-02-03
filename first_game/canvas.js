let white=false

document.querySelector('#start-button').onclick = function(){
    this.remove(); //removes start button
    startGame(); //calls startGame  
     white = true
     init()
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

function drawRAB(){
    let img3=new Image()
    img3.src="./images/block-left.jpg"
    ctx.drawImage(img3,rightArm.x,rightArm.y,rightArm.width,rightArm.height)
}
  
function drawBag() {
    ctx.drawImage(img, moneyBag.x, moneyBag.y, moneyBag.width, moneyBag.height); //draws the moneyBag depending on the coords in the obj above 
  }
  
var mouse = {
    x: undefined,
    y: undefined
}

var colorArray = [];

let smiley = new Image();
smiley.src = './images/smiley.png';
colorArray.push(smiley);

let smiley2 = new Image();
smiley2.src = './images/heart-eyes.png';
colorArray.push(smiley2);

let moneyEmoji = new Image();
moneyEmoji.src = './images/money.png';
colorArray.push(moneyEmoji);

let moneyWings = new Image();
moneyWings.src = './images/moneywings.png';
colorArray.push(moneyWings);

let hearts = new Image();
hearts.src = './images/hearts.png';
colorArray.push(hearts);

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
    })

let gameWidth = canvas.width
let gameHeight = canvas.height






function Circle(x, y, dx, dy, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.stroke = colorArray[Math.floor(Math.random() * colorArray.length)];
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        this.image = colorArray[Math.floor(Math.random() * colorArray.length)]; 
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
   for (var i = 0; i < 50; i++){
        var radius = Math.random() * 9 + 9;
        var x = Math.random() * (innerWidth - radius * 2) + radius;   //random location for each spawn
        var y = Math.random() * ((innerHeight- 300) - radius * 2) + radius;
        var dx = Math.random() - 0.5 * 2;   //create velocity variable
        var dy = Math.random() - 0.5 * 2;  //randomize initial direction
        // create a radius var so the bouce off the wall is cleaner
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
console.log(circleArray)
}

function animate(){
    loop=requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    if (white){
         drawBoard()
         drawBag()
         drawRAC()
         checkGameOver()
    }
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

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
      case 32: drawRAB();console.log("space bar hit");break;
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


