//SlideShow
var slide = document.getElementById("slideshow");
 
var slideArray = ["slide1.jpg","slide2.jpg","slide3.jpg","slide4.jpg","slide5.jpg"];
 
var Index = 0;
 
function changeImage() {
   slide.setAttribute("src",slideArray[Index]);
   Index++;
   if (Index >= slideArray.length) {
      Index = 0;
   }
}
 
window.onload = function() {
 
   setInterval(changeImage,2750);
}
//End of Slide Show

window.onload = function() {

var reviews = [5, 4, 2 ,1, 4, 2, 5, 1, 6, 3];

var c = document.getElementById("graph");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
// first bar
ctx.lineTo((25*1), (25));
ctx.stroke;
ctx.lineTo((25*1),(25));
ctx.stroke;
ctx.lineTo((0),(25));
ctx.stroke;
ctx.fill();
// second bar
ctx.moveTo(0,50);
ctx.lineTo((25*2), (50));
ctx.stroke;
ctx.lineTo((25*2),(50));
ctx.stroke;
ctx.lineTo((0),(50));
ctx.stroke;
ctx.fill();
// third bar
ctx.moveTo(0, 75);
ctx.lineTo((25*3), 75);
ctx.stroke;
ctx.lineTo((25*3),(75));
ctx.stroke;
ctx.lineTo((0),(75));
ctx.stroke;
ctx.fill();
// fourth bar
ctx.moveTo(0, 100);
ctx.lineTo((25*4), (100));
ctx.stroke;
ctx.lineTo((25*4),(100));
ctx.stroke;
ctx.lineTo((0),(100));
ctx.stroke;
ctx.fill();
// fourth bar
ctx.moveTo(0, 125);
ctx.lineTo((25*4), (125));
ctx.stroke;
ctx.lineTo((25*4),(125));
ctx.stroke;
ctx.lineTo((0),(125));
ctx.stroke;
ctx.fill();
}
