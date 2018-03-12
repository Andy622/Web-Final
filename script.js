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