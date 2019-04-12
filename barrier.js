var w = window.innerWidth;
var h = window.innerHeight;
var barrier = new barrier();
var miss = 0;
var en;
function barrier(){
        this.x = w;
        this.y = Math.floor(Math.random()*h);
        this.yrad = Math.floor((Math.random()*300) + 50);
        this.gravity = 20;
        this.velocity = 0;
        this.show = function(){
          fill(color('white'));
          image(en,this.x+100, this.y, 120,this.yrad);
        }
        this.update = function(){
          this.velocity += this.gravity; //gravity applied when not jumping
          this.x -= this.velocity;
          this.velocity *= 0; // air resistance
          if(this.x < -100){
             miss ++;
            this.x = w+100;
            this.y = Math.floor(Math.random()*h);
            this.yrad = Math.floor((Math.random()*300 + 50));
	        document.getElementById('score').innerHTML = "Score: " + miss;
          }

        }
    }