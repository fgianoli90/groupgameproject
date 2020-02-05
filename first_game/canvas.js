//start button clicked
document.querySelector('#start-button').onclick = function(){
    this.remove(); //removes start button
    myMusic.stop();
    startGame(); //calls startGame  
    createFeelings()
    createCash()
    animate()
  };

//Declare canvas
var canvas = document.querySelector('canvas');  // associates canvas tag with canvas new var
canvas.width = window.innerWidth/1.5; // Sets our canvas to browsers current dimensions
canvas.height = window.innerHeight/1.8;
var ctx = canvas.getContext('2d');

//Declare images to load to canvas
var img = new Image(); 
var img1 = new Image();
var img2 = new Image();
var kimCryEmoji= new Image();
var jordanCryEmoji= new Image();
var northWestCryEmoji= new Image();

//Declare variables
let loop
let score=0;
var gamelives= [];
var cashArray = [];
var circleArray = [];
var feelingsArray = [];
var moneyArray = [];

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

//Money Array
let moneyEmoji = new Image();
moneyEmoji.src = './images/coin3.png';
moneyArray.push(moneyEmoji);

let moneyWings = new Image();
moneyWings.src = './images/moneywings.png';
moneyArray.push(moneyWings);


//declare avatarGirl images
let img3=new Image()
img3.src="./images/girl_movements/Run_Left.png"
let rab = false; 

let img4=new Image()
img4.src="./images/girl_movements/Run_Right.png"
let rrt = false; 

let img5=new Image()
img5.src="./images/girl_movements/move_up.png"
let rup = false; 

let img6=new Image()
img6.src="./images/girl_movements/move_down.png"
let rdown = false; 

//Declare Classes
class Star{
    constructor(){
    this.radius = (Math.random() * 10) + 5;
    this.x = this.radius + (canvas.width - this.radius * 2) * Math.random();
    this.y = -10; 
    this.dx = (Math.random() - 0.5) * 20;
    this.dy = 30;
    this.gravity = .5;
    this.friction = .54;
    }
    draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.abs(this.radius), 0, Math.PI * 2, false);

        ctx.shadowColor = '#E3EAEF';
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.fillStyle = "#E3EAEF";
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}

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
            ctx.drawImage(this.image, this.x - 24, this.y - 24, 50, 50)
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
var myMusic;
myMusic = new sound("./audio/background.mp3");
myMusic.play();

var stars = [];

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

ctx.fillStyle = "#FECE90";
ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

drawBag()
drawFeelings()
drawCash()
checkStatus()

//Player movement status checker
if(rab){
    drawRAB()
}

if(rrt){
    drawRRT()
}

if(rup){
    drawRUP()
}

if(rdown){
    drawRDOWN()
}
}
