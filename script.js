let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
const keyImg = new Image(70,70);
keyImg.src = 'key.png';

var window_width = window.innerWidth;
var window_height = window.innerHeight;
canvas.width = window_width;
canvas.height = window_height;

var objects = [];

let gravity = {x: 0, y: 0.1};
const objPh = {
    update(ctx) {
        ctx.clearRect(0,0,window_width,window_height);
        for(i = 0; i < objects.length; i++) {
            objects[i].yVel += gravity.y;
            objects[i].xVel += gravity.x;
            objects[i].yPos += objects[i].yVel;
            objects[i].xPos += objects[i].xVel;

            ctx.beginPath();
            ctx.drawImage(keyImg, objects[i].xPos, objects[i].yPos);
            ctx.fillText(objects[i].key, objects[i].xPos + 35, objects[i].yPos + 35);
            ctx.lineWidth = 10;
            ctx.fillStyle = "#eee";
            ctx.font = "30px Roboto"
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.stroke();
        }
    }
}

document.addEventListener('keypress', function(e) {
    var keyTem = {xPos: random(), yPos: 10, xVel: 0, yVel: 0, key: e.key};
    objects.push(keyTem);
    document.getElementById('title').style.opacity = 0;
})

function random() {
    var ram = Math.floor(Math.random() * (window_width  - 0)) + 0;
    return ram;
}

function loop() {
    objPh.update(ctx);
    requestAnimationFrame(loop);
}
loop();
