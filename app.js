var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var jump = false;
const pic = {
    stand: [0 , 0],
    up1: [768 , 0],
    up2: [0, 256],
    down1: [256, 0],
    down2: [512, 0],
    origin_size: 256,
    canvas_size: 128
}
var x = 960 - pic.canvas_size/2;
var y = 810;
var dy = 10;
        
var img = new Image();
img.src = "lib/img.png";

function drawPearl() {
    if(jump == true) {
        y = y - dy
        if(y >= 810) {
            y = 810;
            ctx.drawImage(img, pic.stand[0], pic.stand[1], pic.origin_size, pic.origin_size, x, y, pic.canvas_size, pic.canvas_size);
            jump = false;
            dy = 10;
        }
        else {
            dy-=0.1;
            if (dy >= 5) {
                ctx.drawImage(img, pic.up2[0], pic.up2[1], pic.origin_size, pic.origin_size, x, y, pic.canvas_size, pic.canvas_size);
            }
            else if (dy >= 0 && dy < 5) {
                ctx.drawImage(img, pic.up1[0], pic.up1[1], pic.origin_size, pic.origin_size, x, y, pic.canvas_size, pic.canvas_size);
            }
            else if (dy < 0 && dy > -5) {
                ctx.drawImage(img, pic.down1[0], pic.down1[1], pic.origin_size, pic.origin_size, x, y, pic.canvas_size, pic.canvas_size);
            }
            else if (dy <= -5){
                ctx.drawImage(img, pic.down2[0], pic.down2[1], pic.origin_size, pic.origin_size, x, y, pic.canvas_size, pic.canvas_size);
            }
        }
    }
    else {
        ctx.drawImage(img, pic.stand[0], pic.stand[1], pic.origin_size, pic.origin_size, x, y, pic.canvas_size, pic.canvas_size);
    }
}

function draw() {
    ctx.clearRect(0, 0, 1920, 1080);
    drawPearl();
}

function keydownHandler(event) {  
    if (event.keyCode == 32) {
        jump = true;
    }
}

document.addEventListener("keydown", keydownHandler, false);
const start = setInterval(draw, 1);