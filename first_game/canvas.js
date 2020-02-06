//start button clicked
document.querySelector('#start-button').onclick = function(){
    this.remove(); //removes start button
    //Reassign order of divs to get canvas to center
    var divs = document.getElementsByTagName("div");
    divs[0].parentNode.appendChild(divs[0]);
    myMusic.stop();
    startGame(); //calls startGame  
    createFeelings()
    createCash()
    animate()
  };

//Event Listeners
// window.addEventListener('mousemove', //Is it in current use?
// function(event){
//     mouse.x = event.x;
//     mouse.y = event.y;
//     // console.log(mouse)
// })

window.addEventListener('resize', function(){
  canvas.width = window.outerWidth/1.5; // Sets our canvas to browsers current dimensions
  canvas.height = window.outerHeight/1.8;
  drawFeelings();
  drawCash();
  })

//Declare canvas
var canvas = document.querySelector('canvas');  // associates canvas tag with canvas new var
canvas.width = window.innerWidth/1.5; // Sets our canvas to browsers current dimensions
canvas.height = window.innerHeight/1.8;
var ctx = canvas.getContext('2d');

//Declare images to load to canvas
<<<<<<< HEAD
var img = new Image();
var img1 = new Image();
var img2 = new Image();
var kimCryEmoji= new Image();
var jordanCryEmoji= new Image();
var northWestCryEmoji= new Image();
=======
var img = new Image(); 
var girlLife1= new Image();
var girlLife2= new Image();
var girlLife3= new Image();
var myMusic;
>>>>>>> 49817629ca8ffcb9c7617f2b140b7754d2f6d757

//Declare variables
let loop
let score=0;
let numOfLives=0
let inAir=false;
let playover = true
let gameOver=false;

//Declare arrays to be used
var gamelives= [];
var cashArray = [];
var circleArray = [];
var feelingsArray = [];
var moneyArray = [];



var groundHeight = canvas.height * 0.15;
var ballSpawnHeight = 10;
var backgroundGradient = ctx.createLinearGradient(0,0,0, canvas.height);

backgroundGradient.addColorStop(0,"#171e26");
backgroundGradient.addColorStop(1,"#00CCFF");

//Image objects with initial properties declared
let avatarGirl = {  
    x:canvas.width / 2,
    y:canvas.height-90,
    width: 60,
    height: 90
}
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
    
var mouse = {
        x: undefined,
        y: undefined
    }
    
var miniStars = [];
    for (let i = 0; i < 30; i++) {
        miniStars.push(new MiniStar());
    }
// Feelings Array
let smiley = new Image();
smiley.src = './images/cryFace.png';
feelingsArray.push(smiley);

let smiley2 = new Image();
smiley2.src = './images/heartEyes.png';
feelingsArray.push(smiley2);

let smiley3 = new Image();
smiley3.src = './images/noseFume.png';
feelingsArray.push(smiley3);

let smiley4 = new Image();
smiley4.src = './images/screamFace.png';
feelingsArray.push(smiley4);

let smiley5 = new Image();
smiley5.src = './images/scrunchFace.png';
feelingsArray.push(smiley5);

let smiley6 = new Image();
smiley6.src = './images/madFace.png';
feelingsArray.push(smiley6);

let smiley7 = new Image();
smiley7.src = './images/kissyFace.png';
feelingsArray.push(smiley7);

//Money Array
let coinEmoji1 = new Image();
coinEmoji1.src = './images/coinOne.png';
moneyArray.push(coinEmoji1);

let coinEmoji2 = new Image();
coinEmoji2.src = './images/coinThumb.png';
moneyArray.push(coinEmoji2);

let coinEmoji3 = new Image();
coinEmoji3.src = './images/moneyCrown.png';
moneyArray.push(coinEmoji3);


//declare avatarGirl images
// let img3=new Image()
// img3.src="./images/girl_movements/Run_Left.png"
// let rab = false; 

// let img4=new Image()
// img4.src="./images/girl_movements/Run_Right.png"
// let rrt = false; 

// let img5=new Image()
// img5.src="./images/girl_movements/move_up.png"
// let rup = false; 

// let img6=new Image()
// img6.src="./images/girl_movements/move_down.png"
// let rdown = false; 

<<<<<<< HEAD
// Declare Classes

class MiniStar{
    constructor(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 3;
    }
    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        ctx.shadowColor = 'yellow';
        ctx.shadowBlur = (Math.random() * 10) + 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.fillStyle = "white";
        ctx.fill();

        ctx.closePath();	
        ctx.restore();
    }
}

class Circle{
    constructor(x, y, dx, dy, radius){
        this.x = x;
        this.y = ballSpawnHeight;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.stroke = feelingsArray[Math.floor(Math.random() * feelingsArray.length)];
        this.color = feelingsArray[Math.floor(Math.random() * feelingsArray.length)];
        this.image = feelingsArray[Math.floor(Math.random() * feelingsArray.length)]; 
    }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            // ctx.strokeStyle = 'blue';
            ctx.stroke();
            ctx.strokeStyle = this.stroke;
            // ctx.fillStyle = this.color;
            // ctx.fill();
            ctx.drawImage(this.image, this.x - 24, this.y - 24, 50, 50);
        };
        update() {
            if (this.x + this.radius > canvas.width || this.x < this.radius){   
                this.dx = -this.dx
            }
            if (this.y + this.radius > canvas.height || this.y < this.radius){   
                this.dy = -this.dy
            }
            this.x += this.dx;
            this.y += this.dy;       
            this.draw();
        }
    }

class Cash{
    constructor(x, y, dx, dy, radius){
    this.x = x;
    this.y = ballSpawnHeight;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.stroke = moneyArray[Math.floor(Math.random() * moneyArray.length)];
    this.color = moneyArray[Math.floor(Math.random() * moneyArray.length)];
    this.image = moneyArray[Math.floor(Math.random() * moneyArray.length)]; 
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.strokeStyle = 'blue';
        ctx.stroke();
        ctx.strokeStyle = this.stroke;
        // ctx.fillStyle = this.color;
        // ctx.fill();
        ctx.drawImage(this.image, this.x - 24, this.y - 24, 50, 50)
    };
    update(){
        if (this.x + this.radius > canvas.width || this.x <= this.radius){   
            this.dx = -this.dx
        }
        if (this.y + this.radius > canvas.height || this.y <= this.radius){   
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

//Sound constructor
class sound {
    constructor(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    }
    play(){
      this.sound.play();
    }
    stop(){
      this.sound.pause();
    }
  }
  var spriteWidth = 1664; 
  var spriteHeight = 1816; 
  
  var rows = 4; 
  var cols = 4; 
  
  var canvasWidth = canvas.width
  var canvashHeight = canvas.height
//Player Constructor 
class Girl {
    constructor() {
        this.trackIdle = 0;
        this.trackRight = 1; 
        this.trackLeft = 2;
        this.trackJump = 3; 
        
        this.width = spriteWidth/cols; 
        this.height = spriteHeight/rows; 
        
        this.curFrame = 0; 
        this.frameCount = 4; 
        
        this.x=canvas.width/2;
        this.y=canvas.height-90; 
        
        this.srcX = 356; 
        this.srcY = 460; 
        
        this.idle = true;
        this.left = false; 
        this.right = false;
        this.jump = false;
        
        this.speed = 3; 
        this.ctx = ctx
        this.character = new Image(); 
        this.character.src = "./images/girl_movements/final_girl_sprites.png";
    }
    
    updateFrame(){
        this.curFrame = ++this.curFrame % this.frameCount; 				
        this.srcX = this.curFrame * this.width; 
        // this.ctx.clearRect(this.x,this.y,this.width,this.height);	
        if(this.idle){
            this.srcY = this.trackIdle * this.height; 
            
        }
        
        if(this.left){    //removed properties  && this.x>0
            this.srcY = this.trackLeft * this.height; 
            this.x-=this.speed; 
        }
        if(this.right ){   //removed properties && this.x<this.canvasWidth-this.width
            this.srcY = this.trackRight * this.height; 
            this.x+=this.speed; 
        }
        if(this.jump){   //removed properties  && this.y<this.canvasHeight-this.height
            this.srcY = this.trackJump * this.height; 
            // this.x+=this.speed; 
        }
        this.draw()
    }
    
    draw() {
        // this.updateFrame();
        ctx.drawImage(this.character,this.srcX,this.srcY,this.width,this.height,this.x,this.y,60,90);
    }

    moveLeft(){
        this.left = true; 
        this.right = false; 
        this.idle = false;
        this.jump = false;
        
    }
    
    moveRight(){
        this.left = false;
        this.right = true; 
        this.idle = false;
        this.jump = false;
    }
    
    moveIdle(){
        this.left = false; 
        this.right = false; 
        this.idle = true;
        this.jump = false;
    }
    
    moveJump(){
        this.left = false;
        this.right = false; 
        this.idle = false;
        this.jump = true;
    }     
    
    
    
}


var myMusic;
myMusic = new sound("./audio/background.mp3");
myMusic.play();



var groundHeight = canvas.height * 0.15;

var backgroundGradient = ctx.createLinearGradient(0,0,0, canvas.height);
backgroundGradient.addColorStop(0,"#171e26");
backgroundGradient.addColorStop(1,"#00CCFF");

var miniStars = [];
	for (let i = 0; i < 30; i++) {
		miniStars.push(new MiniStar());
	}
  
var mouse = {
    x: undefined,
    y: undefined
}

var ballSpawnHeight = 10;

function createFeelings(){
    setInterval(() => {
        var radius = Math.random() * 9 //+ 2;
        var x = Math.random() * (canvas.width - radius * 2) + radius;   //random location for each spawn
        var y = Math.random() * ((canvas.height- 300) - radius * 2) + radius;
        var dx = Math.random() - 0.5 * 2;   //create velocity variable
        var dy = Math.random() - 0.5 * 2;  //randomize initial direction
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }, 3000);
  }

function createCash(){
setInterval(() => {
    var radius = Math.random() * 9 + 2;
    var x = Math.random() * (canvas.width - radius * 2) + radius;   //random location for each spawn
    var y = Math.random() * ((canvas.height- 300) - radius * 2) + radius;
    var dx = Math.random() - 0.5 * 2;   //create velocity variable
    var dy = Math.random() - 0.5 * 2;  //randomize initial direction
    cashArray.push(new Cash(x, y, dx, dy, radius))
}, 2000)
}


var aGirl= new Girl()

//Start of animate function
function animate(){
loop = window.requestAnimationFrame(animate);
ctx.fillStyle = backgroundGradient;
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawBoard()
drawGameLives()

for (var i = 0; i < miniStars.length; i++) {
    miniStars[i].draw();
}




createMountainRange(1, canvas.height - 50, "#fff");
createMountainRange(2, canvas.height - 100,  "#669999");
createMountainRange(3, canvas.height - 300 , "#00CCFF");
=======

>>>>>>> 49817629ca8ffcb9c7617f2b140b7754d2f6d757


<<<<<<< HEAD
// drawBag()
aGirl.updateFrame()

drawFeelings()
drawCash()
checkStatus()

//Player movement status checker
// if(rab){
//     drawRAB()
// }

// if(rrt){
//     drawRRT()
// }

// if(rup){
//     drawRUP()
// }

// if(rdown){
//     drawRDOWN()
// }
}
=======
>>>>>>> 49817629ca8ffcb9c7617f2b140b7754d2f6d757
