$(document).ready(function(){

    $("#box1").fadeOut("slow", function(){
        $("#box1").fadeIn("fast");
    });

    $("#box2").fadeOut("slow", function(){
        $("#box2").fadeIn("fast");
        });

    $("#box3").fadeOut("slow", function(){
        $("#box3").fadeIn("fast");
    });

    $("#box4").fadeOut("slow", function(){
        $("#box4").fadeIn("fast");
        });

    $("#box1").on("mouseover", function(){
        $("#box1").css({
          "background-color": "#000",
          "color": "#FFF"

        });
    
        
    });
    $("#box2").on("mouseover", function(){
        $("#box2").css({
          "background-color": "#000",
          "color": "#FFF"

        });
    
    });
    $("#box3").on("mouseover", function(){
        $("#box3").css({
          "background-color": "#000",
          "color": "#FFF"

        });

    });
    $("#box4").on("mouseover", function(){
        $("#box4").css({
            "background-color": "#000",
            "color": "#FFF"

        });

    });
    

    $(".box").on("mouseout", function(){
        $(".box").css({
            "background-color": "#000",
            "color": "#FFF"

        });
    });


});