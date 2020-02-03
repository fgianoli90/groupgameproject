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
let loop=window.requestAnimationFrame(animate)

function startGame(){
    console.log("START");
    img.onload = function() {  //Load the car for the first time 
       ctx.drawImage(img, car.x, car.y, car.width, car.height);
    };
    img.src = "./images/car.png";
    drawBoard()
    var divs = document.getElementsByTagName("div");
    divs[0].parentNode.appendChild(divs[0]);  
    window.requestAnimationFrame(animate) //Starts the animation infinite loop
  }

function drawBoard(){
    ctx.fillStyle= "white";
    ctx.fillRect(0,0,canvas.width,canvas.height)
}

let car = {  
    x:canvas.width / 2,
    y:canvas.height * 6/7,
    width: 50,
    height: 80
  }
  
function drawCar() {
    ctx.drawImage(img, car.x, car.y, car.width, car.height); //draws the car depending on the coords in the obj above 
  }
  
 
  
  
//   function drawPerson() {
//     ctx.drawImage(img, person.x, person.y, person.width, person.height); //draws the player depending on the coords in the obj above 
//   }




//Rectangles
// ctx.fillStyle= 'rgba(255,0,0,0.5)'
// ctx.fillRect(178, 100, 100, 100);
// ctx.fillStyle= 'rgba(0,0,255,0.5)'
// ctx.fillRect(100, 150, 100, 100);
// ctx.fillStyle= 'rgba(0,255,0,0.5)'
// ctx.fillRect(10, 275, 100, 100);
// console.log(canvas);
// //Lines
// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 300);
// ctx.strokeStyle = "#fa34a3"; 
// ctx.stroke();
// //Arc
// // ctx.beginPath();
// // ctx.arc(300, 300, 30,0, Math.PI * 2, false);
// // ctx.stroke();
// // Using a for loop to generate 100 circles with random locations
// for (var i = 0; i < 100; i++){
//     var x = Math.random()* window.innerWidth;
//     var y = Math.random()* window.innerHeight;
//     ctx.beginPath();
//     ctx.arc(x, y, 30,0, Math.PI * 2, false);
//     ctx.strokeStyle = 'blue';
//     ctx.stroke();
// }



var mouse = {
    x: undefined,
    y: undefined
}

// var maxRadius = 40; //relevant to shrinking and growing affect
// var minRadius = 5;

var colorArray = [];

// colorArray[0] = new Image();
// colorArray[0].src = './images/smiley.png';

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
         drawCar()
         checkGameOver()
    }
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}
// init();
// animate();
document.onkeydown = function(e) { //controls -- up down left and right ... 
    switch (e.keyCode) {
      case 38: car.y-=20; console.log('up',  ); break;
      case 40: car.y+=20; console.log('down',); break;
      case 37: if (car.x >= 110){
        car.x-=20; console.log('left',); break;}
        else {
          car.x === 110; break;
        }
      case 39: if (car.x <= canvas.width - 165){
          car.x+=20; console.log('right'); break;
      } else {
        car.x === 165; break;
      }
    }
  }
  function crashWith(feeling){ 
    console.log("inside crashed")
    return !(
          car.x > feeling.x+feeling.radius ||
          car.y > feeling.y+feeling.radius ||
          car.x+car.width < feeling.x ||
          car.y+car.height < feeling.y
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


