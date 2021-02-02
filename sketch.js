hr = hour();
mn =minute();
sc = second();

function setup() {
  scAngle = map(0,60,0,360)
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  stroke(255,0,0)
  strokeweight(7);
  line(0,0,100,0)
  drawSprites();
}