var canvas = document.querySelector('canvas');  // associates canvas tag with canvas new var

canvas.width = window.innerWidth; // Sets our canvas to browsers current dimensions
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');

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

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
    '#0A1747',
    '#0029FA',
    '#8D07F6',
    '#FFFF05',
    '#D4DBF5'
];





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


function Circle(x, y, dx, dy, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.stroke = colorArray[Math.floor(Math.random() * colorArray.length)];
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        this.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            // ctx.strokeStyle = 'blue';
            ctx.stroke();
            ctx.strokeStyle = this.stroke;
            ctx.fillStyle = this.color;
            ctx.fill();
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

            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y -this.y > -50){
                if(this.radius < maxRadius){
                    this.radius += 1;
                }
                    
            } else if (this.radius > minRadius){
                this.radius -= 1;
            }
            this.draw();
        }
    }




console.log(circleArray)

//declare animate function and request itself to create the loop
var circleArray = [];
function init(){
   

for (var i = 0; i < 800; i++){
    var radius = Math.random() * 9 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;   //random location for each spawn
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = Math.random() - 0.5 * 2;   //create velocity variable
    var dy = Math.random() - 0.5 * 2;  //randomize initial direction
     // create a radius var so the bouce off the wall is cleaner
    circleArray.push(new Circle(x, y, dx, dy, radius));
}
}

    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (var i = 0; i < circleArray.length; i++){
            circleArray[i].update();
        }
    }
init();
animate();