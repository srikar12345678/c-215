var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  car=createSprite(600,100,50,50);
  car.shapeColor="blue";
  car.velocityX=3;
wall=createSprite(1100,100,20,90);
wall.shapeColor="brown";

}

function draw() {

  background(0,0,0);
  
  bounceOff(car,wall) ; 

 
  drawSprites();
}
