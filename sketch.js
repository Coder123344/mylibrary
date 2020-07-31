var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  rect1 = createSprite(300, 200, 50, 60);
  rect1.shapeColor = "yellow";

  rect2 = createSprite(500, 200, 50, 60);
  rect2.shapeColor = "yellow";

  rect2.velocityX = -1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


 if (isTouching(movingRect,fixedRect)) {
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";

 }
 else {
  movingRect.shapeColor = "white";
  fixedRect.shapeColor = "white";

 }
 
bounceOff(rect1,rect2);
  

  drawSprites();
}
