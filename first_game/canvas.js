var canvas = document.querySelector('canvas');  // associates canvas tag with canvas new var

canvas.width = window.innerWidth; // Sets our canvas to browsers current dimensions
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');


ctx.fillStyle= 'rgba(255,0,0,0.5)'
ctx.fillRect(178, 100, 100, 100);
ctx.fillStyle= 'rgba(0,0,255,0.5)'
ctx.fillRect(100, 150, 100, 100);
ctx.fillStyle= 'rgba(0,255,0,0.5)'
ctx.fillRect(10, 275, 100, 100);


console.log(canvas);



//Lines


ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.strokeStyle = "#fa34a3"; 
ctx.stroke();