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
var img = new Image(); 
var girlLife1= new Image();
var girlLife2= new Image();
var girlLife3= new Image();
var myMusic;

//Declare variables
let loop
let score=0;
let numOfLives=0
let inAir=false;
let playover = true
let gameOver=false;

//Sprite settings
var spriteWidth = 1664; 
var spriteHeight = 1816;
var cols = 4;
var rows = 4; 
var girlX = canvas.width/2;
var girlY = canvas.height-90;
var aGirl= new Girl()


//Declare arrays to be used
var gamelives= [];
var cashArray = [];
var circleArray = [];
var feelingsArray = [];
var moneyArray = [];
var miniStars = [];



var groundHeight = canvas.height * 0.15;
var ballSpawnHeight = 10;
var backgroundGradient = ctx.createLinearGradient(0,0,0, canvas.height);
var miniStars = [];
	for (let i = 0; i < 30; i++) {
		miniStars.push(new MiniStar());
	}
backgroundGradient.addColorStop(0,"#171e26");
backgroundGradient.addColorStop(1,"#00CCFF");

//Image objects with initial properties declared


// let aGirl = {  
//     x:canvas.width / 2,
//     y:canvas.height-90,
//     width: 60,
//     height: 90
// }
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



