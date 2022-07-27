canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

nasaimgsarray=["nasaimg1.jpg","nasaimg2.jpg","nasaimg3.jpg","nasaimg4.jpg"];
randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);


background_image = nasaimgsarray[randomnumber];
rover_image = "rover.png";

function add(){
    background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src = background_image;

    rover_img = new Image();
    rover_img.onload = uploadrover;
    rover_img.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_img,0,0, canvas.width, canvas.height); 
}
function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_KeyDown);

function my_KeyDown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if(key_pressed=="38"){
        up();
        console.log("up");
    }
    if(key_pressed=="37"){
        left();
        console.log("left");
    }
    if(key_pressed=="39"){
        right();
        console.log("right");
}
if(key_pressed=="40"){
    down();
    console.log("down");
}
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed, x = "+ rover_x, + ", y = "+ rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
if (rover_y<=500){
    rover_y=rover_y+10;
    console.log("when down arrow is pressed, x = "+ rover_x, + ", y = "+ rover_y);
    uploadBackground();
    uploadrover();
}
}
function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, x = "+ rover_x, + ", y = "+ rover_y);
        uploadBackground();
        uploadrover();
    }
    }
    function right(){
        if (rover_x<=700){
            rover_x=rover_x+10;
            console.log("when right arrow is pressed, x = "+ rover_x, + ", y = "+ rover_y);
            uploadBackground();
            uploadrover();
        }
        }