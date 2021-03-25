var movingRect,fixedRect;
var sumX,sumY;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 100);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;


}

function draw() {
  background(255,255,255);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  sumX = movingRect.width/2 + fixedRect.width/2;
  sumY = movingRect.height/2 + fixedRect.height/2;

  if(movingRect.x - fixedRect.x < sumX && fixedRect.x - movingRect.x <sumX && 
    movingRect.y - fixedRect.y < sumY && fixedRect.y - movingRect.y<sumY){
    movingRect.shapeColor = "red";
    
  }  else {
           movingRect.shapeColor = "green";
          }
  drawSprites();
}