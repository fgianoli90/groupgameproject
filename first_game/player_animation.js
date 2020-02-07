    //         var spriteWidth = 1664; 
	// 		var spriteHeight = 1816; 
			
	// 		var rows = 4; 
    //         var cols = 4; 
            
	// 		var canvasWidth = canvas.width
	// 		var canvashHeight = canvas.height


    //         // Girl Class
    //         class Girl {
    //         constructor(ctx) {
    //             this.trackIdle = 0;
    //             this.trackRight = 1; 
    //             this.trackLeft = 2;
    //             this.trackJump = 3; 
                
    //             this.width = spriteWidth/cols; 
    //             this.height = spriteHeight/rows; 
                
    //             this.curFrame = 0; 
    //             this.frameCount = 4; 
                
    //             this.x=0;
    //             this.y=100; 
                
    //             this.srcX = 356; 
    //             this.srcY = 460; 
                
    //             this.idle = true;
    //             this.left = false; 
    //             this.right = false;
    //             this.jump = false;
                
    //             this.speed = 12; 
    //             this.ctx = ctx
    //             this.character = new Image(); 
    //             this.character.src = "/final_girl_sprites.png";
    //         }
			
	// 		updateFrame = () =>{
	// 			this.curFrame = ++this.curFrame % this.frameCount; 				
	// 			this.srcX = this.curFrame * this.width; 
	// 			this.ctx.clearRect(this.x,this.y,this.width,this.height);	
    //             if(this.idle){
    //                 this.srcY = this.trackIdle * this.height; 
					
    //             }
                
	// 			if(this.left && this.x>0){
	// 				this.srcY = this.trackLeft * this.height; 
	// 				this.x-=this.speed; 
	// 			}
	// 			if(this.right && this.x<this.canvasWidth-this.width){
	// 				this.srcY = this.trackRight * this.height; 
	// 				this.x+=this.speed; 
    //             }
    //             if(this.jump && this.y<this.canvasHeight-this.height){
	// 				this.srcY = this.trackJump * this.height; 
	// 				this.x+=this.speed; 
    //             }
                
	// 		}
			
	// 		draw = () =>{
	// 			this.updateFrame();
	// 			this.ctx.drawImage(this.character,this.srcX,this.srcY,this.width,this.height,this.x,this.y,this.width,this.height);
	// 		}
			
			
			// moveLeft(){
			// 	this.left = true; 
            //     this.right = false; 
            //     this.idle = false;
            //     this.jump = false;
			// }
			
			// moveRight(){
			// 	this.left = false;
            //     this.right = true; 
            //     this.idle = false;
            //     this.jump = false;
            // }
            
            // moveIdle(){
			// 	this.left = false; 
            //     this.right = false; 
            //     this.idle = true;
            //     this.jump = false;
			// }
			
			// moveJump(){
			// 	this.left = false;
            //     this.right = false; 
            //     this.idle = false;
            //     this.jump = true;
			// }     
    // }
  