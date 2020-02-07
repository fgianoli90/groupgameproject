//Start button click event listener
//Start menu background music
//Event listeners
//Canvas initialized
//All variables, arrays, and new objects to be used throughout code


//Start button clicked to start game
document.querySelector('#start-button').onclick = function(){
    this.remove(); //removes start button
    myMusic.stop();//stops intro music
    
    //Methods called for initial game set up. (See functions1.js)
    startGame();   
    createFeelings()
    createCash()
    animate()
  };

//Initiate background music to Start screen of the game
myMusic = new sound("./audio/dance.mp3");
myMusic.play();

//Event Listeners
// window.addEventListener('mousemove', //Is it in current use?
// function(event){
//     mouse.x = event.x;
//     mouse.y = event.y;
//     // console.log(mouse)
// })
// var mouse = {
//     x: undefined,
//     y: undefined
// }

window.addEventListener('resize', function(){
  canvas.width = window.outerWidth/1.5; // Sets our canvas to browsers current dimensions
  canvas.height = window.outerHeight/1.8;
  drawFeelings();
  drawCash();
  })

//Declare canvas space to draw in
var canvas = document.querySelector('canvas');  // associates canvas tag with canvas new var
canvas.width = window.innerWidth/1.5; // Sets our canvas to browsers current dimensions
canvas.height = window.innerHeight/1.8;
var ctx = canvas.getContext('2d');

//Declare images to load to canvas
var img = new Image(); 
var girlLife1= new Image();
var girlLife2= new Image();
var girlLife3= new Image();


var myMusic;

//Declare global variables
let loop
let score=0;
let numOfLives=0
let inAir=false;
let gameOver=false;

//Sprite variable settings
var spriteWidth = 1664; 
var spriteHeight = 1816;
var cols = 4;
var rows = 4; 
var girlX = canvas.width/2;
var girlY = canvas.height-90;
var aGirl= new Girl() //Girl is a class on classes.js


//Declare arrays to be used for image objects
var gamelives= [];
var cashArray = [];
var circleArray = [];
var feelingsArray = [];
var moneyArray = [];
var miniStars = [];

// var idle = true;
// var left = false; 
// var right = false;
// var jump = false;

//Sound Components
myWalk = new sound("./audio/footsteps-trimmed.mp3");
myJump = new sound("./audio/jumppp22.ogg");
myMoney= new sound("./audio/coin10.wav");
myDeath= new sound("./audio/death.wav");
myGameEnd= new sound("./audio/round_end.wav")
// myBackground= new sound("./audio/dance.mp3")
myBackground= new Audio('./audio/dance.mp3'); 
myBackground.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

//Draws background in the canvas space
var groundHeight = canvas.height * 0.15;
var ballSpawnHeight = 10;



//BackGround Gradient properties for Background
var backgroundGradient = ctx.createLinearGradient(0,0,0, canvas.height);
backgroundGradient.addColorStop(0,"#171e26");
backgroundGradient.addColorStop(1,"white");





//Create Background Stars
var miniStars = [];
	for (let i = 0; i < 30; i++) {
		miniStars.push(new MiniStar());
	}

//Games Lives Array
var gameLives=[
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
coinEmoji2.src = './images/coinOne.png';
moneyArray.push(coinEmoji2);

let coinEmoji3 = new Image();
coinEmoji3.src = './images/coinOne.png';
moneyArray.push(coinEmoji3);





