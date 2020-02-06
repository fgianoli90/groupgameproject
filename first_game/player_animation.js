class Girl{
constructor() {
    this.trackIdle = 0;
    this.trackRight = 1; 
    this.trackLeft = 2;
    this.trackJump = 3; 
    
    this.sectionWidth = 1664/4; 
    this.sectionHeight = 1816/4;

    this.curFrame = 0; 
    this.frameCount = 4; 
    
    this.width=60
    this.height=90
    this.x=x;
    this.y=y; 
    
    // this.srcX = srcX; 
    // this.srcY = srcY;
    this.srcX = 356; 
    this.srcY = 460; 
    
    this.idle = true;
    this.left = false; 
    this.right = false;
    this.jump = false;
    
    this.speed = 12; 
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
    
	if(this.left && this.x>0){
		this.srcY = this.trackLeft * this.height; 
		this.x-=this.speed; 
	}
	if(this.right && this.x<this.canvasWidth-this.width){
		this.srcY = this.trackRight * this.height; 
		this.x+=this.speed; 
    }
    if(this.jump && this.y<this.canvasHeight-this.height){
					this.srcY = this.trackJump * this.height; 
					this.x+=this.speed; 
    }
}
			
draw(){
    this.updateFrame()
	ctx.drawImage(this.character,this.srcX,this.srcY,this.sectionWidth,this.sectionHeight,this.x,this.y,this.width,this.height);
}

moveLeft(){
    left = true; 
    right = false; 
    idle = false;
    jump = false;
    // aGirl.updateFrame()
}
			
moveRight(){
	left = false;
    right = true; 
    idle = false;
    jump = false;
    // aGirl.updateFrame()
}

moveIdle(){
	left = false; 
    right = false; 
    idle = true;
    jump = false;
    // aGirl.updateFrame()
}
			
moveJump(){
    left = false;
    right = false; 
    idle = false;
    jump = true;
    // aGirl.updateFrame()
} 
}
  