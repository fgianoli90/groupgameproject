// Declare Classes: 
// 1) MiniStar- Creates stars in the sky of the canvas to appear in random places
// 2) Circle- Creates the emoji objects that drop from the top of the canvas
// 3) Cash- Creates the money objects that drop from the top of the canvas
// 4) Sound- Creates the new sounds, including methods to play and stop the sounds
// 5) Girl- Creates the avatar girl along with properties for tracking movement and setting parameters
class MiniStar{
    constructor(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 8;
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
            // ctx.stroke();
            ctx.strokeStyle = this.stroke;
            // ctx.fillStyle = this.color;
            // ctx.fill();
            ctx.drawImage(this.image, this.x - 24, this.y - 24, 40, 40)
        };
        update() {
            // if (this.x + this.radius > canvas.width || this.x < this.radius){   
                // this.dx = -this.dx
            if (this.x - this.radius > canvas.width){   
                this.x = -this.radius
            }
            if (this.x+this.radius < 0){ 
                this.x= canvas.width+this.radius
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
        ctx.drawImage(this.image, this.x - 24, this.y - 24, 40, 40)
    };
    update(){
        if (this.x + this.radius > canvas.width || this.x <= this.radius){   
            this.dx = -this.dx
        }
        if (this.y <= this.radius){   //this.y + this.radius > canvas.height || 
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

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

//Declare sound Component to be used in class Girl
    myAir= new sound("./audio/shakira.mp3")

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
        
        this.x=girlX;
        this.y=girlY; 
        
        this.srcX = 356; 
        this.srcY = 460; 
        
        this.idle = true;
        this.left = false; 
        this.right = false;
        this.jump = false;
        
        this.speed =  3; 
        this.ctx = ctx
        this.character = new Image(); 
        this.character.src = "./images/girl_movements/final_girl_sprites.png";
    }
    
    updateFrame(){
        this.curFrame = ++this.curFrame % this.frameCount; 				
        this.srcX = this.curFrame * this.width; 

        if(this.idle){
            this.srcY = this.trackIdle * this.height; 
        }
        
        if(this.left){    //removed properties  && this.x>0
            //myWalk.play()
            this.srcY = this.trackLeft * this.height; 
            this.x-=this.speed;
            if (this.x<-20) {
                this.x=canvas.width
            }
        }
        if(this.right ){   //removed properties && this.x<this.canvasWidth-this.width
            //myWalk.play()
            this.srcY = this.trackRight * this.height; 
            this.x+=this.speed; 
            if (this.x>canvas.width) {
                this.x=-50
            }    
        }
        if(this.jump){   //removed properties  && this.y<this.canvasHeight-this.height
            this.srcY = this.trackJump * this.height; 
            myAir.play()
        }
        
    }
    
    draw() {
        this.updateFrame();
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
