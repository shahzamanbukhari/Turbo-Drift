const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let car = {
x:400,
y:250,
speed:0,
angle:0
};

let keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

function update(){

if(keys["ArrowUp"]) car.speed += 0.1;
if(keys["ArrowDown"]) car.speed -= 0.1;

if(keys["ArrowLeft"]) car.angle -= 0.05;
if(keys["ArrowRight"]) car.angle += 0.05;

car.x += Math.cos(car.angle) * car.speed;
car.y += Math.sin(car.angle) * car.speed;

car.speed *= 0.98; // drift effect
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.save();
ctx.translate(car.x,car.y);
ctx.rotate(car.angle);

ctx.fillStyle="red";
ctx.fillRect(-20,-10,40,20);

ctx.restore();
}

function gameLoop(){
update();
draw();
requestAnimationFrame(gameLoop);
}

gameLoop();
