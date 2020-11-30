var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200, 200, 50, 50);
   fixedRect= createSprite(400, 200, 50, 50);
   movingRect.velocityX = 5
   fixedRect.velocityX = -5
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX;
   movingRect.y =World.mouseY;
    bounceoff(fixedRect,movingRect);
   drawSprites();
}
