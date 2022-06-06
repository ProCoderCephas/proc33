var snow, snowImg
var flake, flakeImg
var flake1, flake1Img


function preload(){
snowImg= loadImage("snow2.jpg");
flakeImg =loadImage("snow4.webp");
flake1Img = loadImage("snow5.webp");

}


function setup() {
  createCanvas(800,400);
  snow = createSprite(350,200);
  snow.addImage("snow",snowImg);
  snow.scale = 0.56
  
  

  flake1 = createSprite(400, 200);
  flake1.addImage("flake1", flake1Img)
  flake1.scale = 0.1

  

}

function draw() {
  background(255,255,255); 
  spawnflakes()
  spawnflakes1() 
  drawSprites();
}


function spawnflakes() {
  
  if (frameCount % 20 === 0) {
    flake = createSprite(800, 0);
    flake.x = Math.round(random(685,0));
    flake.addImage("flake", flakeImg)
    flake.scale = 0.1
    flake.velocityY = 4;
    flake.lifetime = 200;
    
  }
  }
  function spawnflakes1(){
  if (frameCount % 20 === 0) {
    flake1 = createSprite(800, 0);
    flake1.x = Math.round(random(685,0));
    flake1.addImage("flake1", flake1Img)
    flake1.scale = 0.085
    flake1.velocityY = 4;
    flake1.lifetime = 200;
  }
}