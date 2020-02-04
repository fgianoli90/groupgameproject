document.querySelector('#start-button').onclick = function(){
    this.remove(); //removes start button
    startGame(); //calls startGame  
    createFeelings()
    createCash()
    animate()
  };

var canvas = document.querySelector('canvas');  // associates canvas tag with canvas new var

canvas.width = window.innerWidth/1.5; // Sets our canvas to browsers current dimensions
canvas.height = window.innerHeight/1.8;


window.addEventListener('resize', function(){
    canvas.width = window.outerWidth/1.5; // Sets our canvas to browsers current dimensions
    canvas.height = window.outerHeight/1.8;
    init();
    init2();
    })

var ctx = canvas.getContext('2d');
var img = new Image(); //load an image element
var img1 = new Image();
var img2 = new Image();
let score=0
var gamelives= []
var kimCryEmoji= new Image();
var jordanCryEmoji= new Image();
var northWestCryEmoji= new Image();
var myMusic;

let loop=window.requestAnimationFrame(animate)

function startGame(){
    console.log("START");
    img.onload = function() {  //Load the moneyBag for the first time 
       ctx.drawImage(img, moneyBag.x, moneyBag.y, moneyBag.width, moneyBag.height);
    };
    img.src = "./images/girl_movements/Idle.png";
    // img1.onload = function() {  //Load the moneyBag for the first time 
    //     ctx.drawImage(img1, leftArm.x, leftArm.y, leftArm.width, leftArm.height);
    //  };
    //  img1.src = "./images/image-cartoon-human-gloves-hand-arm.jpg";
    //  img2.onload = function() {  //Load the moneyBag for the first time 
    //     ctx.drawImage(img2, rightArm.x, rightArm.y, rightArm.width, rightArm.height);
    //  };
    //  img2.src = "./images/right-slant-up.jpg";
    
    drawBoard()
    
    
    
    kimCryEmoji.onload= function() {
        ctx.drawImage(kimCryEmoji,life1.x,life1.y,life1.width,life1.height)
    }
    kimCryEmoji.src="./images/kkimg.png";
    gamelives.push(kimCryEmoji)
    jordanCryEmoji.onload= function() {
        ctx.drawImage(jordanCryEmoji,life2.x,life2.y,life2.width,life2.height)
    }
    jordanCryEmoji.src="./images/jordanCry.png";
    gamelives.push(jordanCryEmoji)
    northWestCryEmoji.onload= function() {
        ctx.drawImage(northWestCryEmoji,life3.x,life3.y,life3.width,life3.height)
    }
    northWestCryEmoji.src="./images/dawson.png";
    gamelives.push(northWestCryEmoji)
    
    
    drawBoard()
    var divs = document.getElementsByTagName("div");
    document.querySelector("header").innerText=`Score: ${score}`
    document.querySelector("header").style.fontSize="30px"
    document.querySelector("p").style.fontSize="20px"
    document.querySelector("p").style.backgroundColor="black"
    document.querySelector(".game-intro").style.marginTop="0"
    divs[0].parentNode.appendChild(divs[0]);  
    window.requestAnimationFrame(animate) //Starts the animation infinite loop
  }

function drawBoard(){
    ctx.fillRect(0,0,canvas.width,canvas.height)
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

function Star() {
    this.radius = (Math.random() * 10) + 5;
    this.x = this.radius + (canvas.width - this.radius * 2) * Math.random();
    this.y = -10; 
    this.dx = (Math.random() - 0.5) * 20;
    this.dy = 30;
    this.gravity = .5;
    this.friction = .54;
    this.draw = function() {
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
function createMountainRange(mountainAmount, height,  color) {
    for (var i = 0; i < mountainAmount; i++) {
        var mountainWidth = canvas.width / mountainAmount;

        // Draw triangle
        ctx.beginPath();
        ctx.moveTo(i * mountainWidth, canvas.height);
        ctx.lineTo(i * mountainWidth + mountainWidth + 325, canvas.height);

        // Triangle peak
        ctx.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height);
        ctx.lineTo(i * mountainWidth - 325, canvas.height);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }
}

function MiniStar() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 9;

    this.draw = function() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        ctx.shadowColor = '#FF6666';
        ctx.shadowBlur = (Math.random() * 10) + 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        ctx.fillStyle = "white";
        ctx.fill();

        ctx.closePath();	
        ctx.restore();
    }
}
var stars = [];
		// var explosions = [];
		var groundHeight = canvas.height * 0.15;
		// var randomSpawnRate = Math.floor((Math.random() * 25) + 60)
		var backgroundGradient = ctx.createLinearGradient(0,0,0, canvas.height);
		backgroundGradient.addColorStop(0,"#171e26");
		backgroundGradient.addColorStop(1,"#00CCFF");

		var miniStars = [];
		for (var i = 0; i < 30; i++) {
			miniStars.push(new MiniStar());
		}





let moneyBag = {  
    x:canvas.width / 2,
    y:canvas.height * 6/7,
    width: 60,
    height: 90
  }
// let rightArm = {  
//     x:(canvas.width / 2)+50,
//     y:(canvas.height * 6/7)-30,
//     width: 30,
//     height: 80
//   }
// let leftArm = {  
//     x:(canvas.width / 2)-30,
//     y:(canvas.height * 6/7)-30,
//     width: 30,
//     height: 80
//   }
// function drawRAC(){
//     ctx.drawImage(img2,rightArm.x,rightArm.y,rightArm.width,rightArm.height);
// }
// function drawLAC(){
//     ctx.drawImage(img1,leftArm.x,leftArm.y,leftArm.width,leftArm.height);
// }
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

function toggleRAB(){
    rab = true;
    setTimeout(()=>rab=false,200)
}
function toggleRRT(){
    rrt = true;
    setTimeout(()=>rrt=false,200)
}
function toggleRUP(){
    rup = true;
    setTimeout(()=>rup=false,200)
}

function toggleRDOWN(){
    rdown = true;
    setTimeout(()=>rdown=false,200)
}

function drawRAB(){
    rab = true;
    ctx.drawImage(img3,moneyBag.x, moneyBag.y, moneyBag.width, moneyBag.height)
}

function drawRRT(){
    rrt = true;
    ctx.drawImage(img4,moneyBag.x, moneyBag.y, moneyBag.width, moneyBag.height)
}

function drawRUP(){
    rup = true;
    ctx.drawImage(img5,moneyBag.x, moneyBag.y, moneyBag.width, moneyBag.height)
}

function drawRDOWN(){
    rdown = true;
    ctx.drawImage(img6,moneyBag.x, moneyBag.y, moneyBag.width, moneyBag.height)
}
  
function drawBag() {
    ctx.drawImage(img, moneyBag.x, moneyBag.y, moneyBag.width, moneyBag.height); //draws the moneyBag depending on the coords in the obj above 
}

function drawGameLives(){
    for (i=0;i<emojiLives.length;i++){
        ctx.drawImage(gamelives[i], emojiLives[i].x, emojiLives[i].y, emojiLives[i].width, emojiLives[i].height)
    }
}
  
var mouse = {
    x: undefined,
    y: undefined
}

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

//Event Listeners
window.addEventListener('mousemove', //Is it in current use?
function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse)
})

var ballSpawnHeight = 10;

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

//declare animate function and request itself to create the loop
var circleArray = [];


function init1(){
    circleArray.forEach(circle =>{
        circle.draw()
        circle.update()
        })
}

function createFeelings(){
    setInterval(() => {
        var radius = Math.random() * 9 + 2;
        var x = Math.random() * (innerWidth - radius * 2) + radius;   //random location for each spawn
        var y = Math.random() * ((innerHeight- 300) - radius * 2) + radius;
        var dx = Math.random() - 0.5 * 2;   //create velocity variable
        var dy = Math.random() - 0.5 * 2;  //randomize initial direction
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }, 3000);
}


//second "Circle" function added
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

//declare animate function and request itself to create the loop
var cashArray = [];

function init2(){
    cashArray.forEach(cash =>{
    cash.draw()
    cash.update()
    })
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

function animate(){
loop=requestAnimationFrame(animate);
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
// drawRAC()
// drawLAC()
init1()
init2()
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
for (var i = 0; i < circleArray.length; i++){
    circleArray[i].update();
}
for (var i = 0; i < cashArray.length; i++){
    cashArray[i].update();
}
}    

document.onkeydown = function(e) { //controls -- up down left and right ... 
    switch (e.keyCode) {
      case 38: if (moneyBag.y >= 20){
                    moneyBag.y-=20;toggleRUP()//rightArm.y-=20; leftArm.y-=20; console.log('up',  );
                    break;
                }else{
                    moneyBag.y-=0;//rightArm.y-=0; leftArm.y-=0;
                    break;
                }
      case 40: if (moneyBag.y <= canvas.height-100){
                    moneyBag.y+=20;toggleRDOWN()//rightArm.y+=20; leftArm.y+=20; //console.log('down',); 
                    break;
                }else{
                    moneyBag.y+=0;//rightArm.y+=0; leftArm.y+=0;
                    break;
                }

      case 37: if(moneyBag.x > 50){
                moneyBag.x-=20; toggleRAB();//rightArm.x-=20;leftArm.x-=20;//console.log('left',); 
                break;
                }else {
                moneyBag.x === 30;//rightArm.x===80;rightArm.x===0; break;
                }
      case 39: if (moneyBag.x <= canvas.width-100){
                moneyBag.x+=20;toggleRRT();//rightArm.x+=20;leftArm.x+=20; //console.log('right'); 
                break;
                } else {
                moneyBag.x === canvas.width-80;rightArm.x===canvas.width-30;leftArm.x===canvas.width-110; 
                break;
                }
      case 32: //console.log("space bar hit");
                break;
  }}

  function collision(object){ 
    // console.log("inside crashed")
    return !(
          moneyBag.x > object.x+object.radius ||
          moneyBag.y > object.y+object.radius ||
          moneyBag.x+moneyBag.width < object.x ||
          moneyBag.y+moneyBag.height < object.y
        )
    }


    
    function checkStatus() {
        let status=true
        for (let i=0;i<circleArray.length;i++){  
            if(collision(circleArray[i])){
                console.log("feelings got me")
                window.cancelAnimationFrame(loop)
                circleArray.splice(i,1) //keeps stopping after 3rd emoji hit
                i= circleArray.length
                doGameOver(ctx)
                console.log("doGameover")
            }
        }
        
        cashArray.forEach(cash => {
            if(collision(cash)){
            cashArray.splice(cashArray.indexOf(cash),1)
            score += 10
            document.querySelector("header").innerText=`Score: ${score}`
            }
        })
    
}
