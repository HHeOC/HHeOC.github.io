var w = window.innerWidth;
var h = window.innerHeight;
var jumper = new jumper();
var d;
      
function jumper(){
        this.x = 50;
        this.y = 0;
        this.gravity = 0.5;
        this.lift = -10;
        this.velocity = 0;
        this.show = function(){
          fill(color('red'));
          ellipse(this.x,this.y,50,50);
        }
        this.up = function(){
         this.velocity += this.lift;//jumping function
       }
      this.update = function(){
          this.velocity += this.gravity; //gravity applied when not jumping
          this.y += this.velocity;
          this.velocity *= 0.985; // air resistance
          if(this.y > h){
            this.y = h;
            this.velocity = 0;
        }
          if(this.y < 0){
           this.y = 0;
            this.velocity = 0;
          }
        }
        this.move = function(){
        if((keyIsDown(65))&&(this.x > 50)){//left
          this.x -= 3;
        }
        if((keyIsDown(68)) && (this.x < w-50)){ //right
          this.x += 3;
        }
        }
}
function keyPressed(){
        if(keyCode == 32){
          jumper.up();
        }
      }

  
