canvass = document.getElementById('myCanvas');
ctx = canvass.getContext('2d');

mouse_event = "Empty" ;
var last_position_2x,last_position_2y;

colors ="black";
width_of_lines = 1;
canvass.addEventListener("mousedown",my_mousedown)

function my_mousedown(e){
mouse_event = "mousedown";
}
canvass.addEventListener("mousemove",my_mousemove)

function my_mousemove(e){
current_position_of_x = e.clientX - canvass.offsetLeft;
current_position_of_y = e.clientY - canvass.offsetTop;
 
if (mouse_event == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = colors;
ctx.lineWidth = width_of_lines;
ctx.moveTo(last_position_2x,last_position_2y);
console.log("Last x  = " + last_position_2x + "last y = " + last_position_2y );
ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();
}
last_position_2x = current_position_of_x;
last_position_2y = current_position_of_y;
}

canvass.addEventListener("mouseup",my_mouseup)

function my_mouseup(e){
mouse_event = "mouseup";
}
canvass.addEventListener("mouseleave",my_mouseleave)

function my_mouseleave(e){
mouse_event = "mouseleave";
}



var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
     
    var width = screen.width; 
    var new_width = width - 70;
    var new_height = screen.height - 300 ;

    if(width < 992){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
        document.body.style.overflow = "hidden";
    }
    canvas.addEventListener("touchstart", my_touch_start);

    function my_touch_start(e){
last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_touch_move);
    function my_touch_move(e){
    var current_x = e.touches[0].clientX - canvas.offsetLeft;
    var current_y = e.touches[0].clientY - canvas.offsetTop;
     ctx.beginPath();
     ctx.strokeStyle = color ; 
     ctx.width_of_line = width_of_line;

     ctx.moveTo(last_position_of_x,last_position_of_y);
     
     ctx.lineTo(current_x,current_y);
     ctx.stroke();
     last_position_of_x = current_x;
     last_position_of_y = current_y;
    }
    function clear_area(){
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
    }



    
    


