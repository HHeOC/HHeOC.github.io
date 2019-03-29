var w = window.innerWidth;
var h = window.innerHeight;
var barrier = new barrier();
function barrier(){
        this.x = w;
        this.y = Math.floor(Math.random()*h);
        var yrad = Math.floor(Math.random()*300);
        this.gravity = 20;
        this.velocity = 0;
        this.show = function(){
          fill(color('white'));
          rect(this.x+100, this.y, 120, yrad);
        }
        this.update = function(){
          this.velocity += this.gravity; //gravity applied when not jumping
          this.x -= this.velocity;
          this.velocity *= 0; // air resistance
          if(this.x < -100){
            this.x = w+100;
            this.y = Math.floor(Math.random()*h);
            yrad = Math.floor(Math.random()*300);
          }
        }
    }