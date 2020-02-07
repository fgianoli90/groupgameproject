// Declare Classes
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
            if (this.x + this.radius > canvas.width || this.x < this.radius){   
                this.dx = -this.dx
            }
            if (this.y + this.radius > canvas.height-80 || this.y < this.radius){   
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
        //this.ctx.clearRect(this.x,this.y,60,90);	
        if(this.idle){
            this.srcY = this.trackIdle * this.height; 
        }
        
        if(this.left){    //removed properties  && this.x>0
            this.srcY = this.trackLeft * this.height; 
            if(this.x>3){
            this.x-=this.speed;
            }else if (this.x<3) {
                this.x=0
            }
        }
        if(this.right ){   //removed properties && this.x<this.canvasWidth-this.width
            this.srcY = this.trackRight * this.height; 
            if(this.x<canvas.width-3){
            this.x+=this.speed; 
            }else if (this.x>canvas.width-3) {
                this.x=canvas.width-60
            }    
        }
        if(this.jump){   //removed properties  && this.y<this.canvasHeight-this.height
            this.srcY = this.trackJump * this.height; 
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
