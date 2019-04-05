var w = window.innerWidth;
var h = window.innerHeight;
var restplace = new restplace();
function restplace(){
  this.x = w/2;
  this.y = h/2;
  this.show = function(){
    fill(color("green"));
    rect(this.x-100,this.y-100,100,100);
  }
}