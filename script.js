// $(document).ready(function(){

//     $("#box1").fadeOut("slow", function(){
//         $("#box1").fadeIn("fast");
//     });

//     $("#box2").fadeOut("slow", function(){
//         $("#box2").fadeIn("fast");
//         });

//     $("#box3").fadeOut("slow", function(){
//         $("#box3").fadeIn("fast");
//     });

//     $("#box4").fadeOut("slow", function(){
//         $("#box4").fadeIn("fast");
//         });

//     $(".box").on("mouseover", function(){
//         $(".box").css({
//           "background-color": "#fff",
//           "color": "#0DFF76"

//         });

//     });

//     $(".box").on("mouseout", function(){
//         $(".box").css({
//             "background-color": "#0ff",
//             "color": "#0ff"

//         });
//     });


// });
 
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