var w = window.innerWidth;
var h = window.innerHeight;
var restplace = new restplace();
var re;
function restplace(){
  this.x = w/2;
  this.y = h/2;
  this.show = function(){
    image(re,this.x-100,this.y-100,100,100);
  }
}