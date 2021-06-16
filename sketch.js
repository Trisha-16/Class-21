var fixedRect, movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect.velocityY=5;
  movingRect.velocityY=-5;
  // object1 = createSprite(100,100,50,50);
  // object2 = createSprite(200,100,50,50);
  // object3 = createSprite(300,100,50,50);
  // object4 = createSprite(400,100,50,50);

  // object1.shapeColor = "orange";
  // object2.shapeColor = "green";
  // object3.shapeColor = "red";
  // object4.shapeColor = "purple";
}

function draw() {
  background(0);  
  bounce(movingRect,fixedRect);
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

  sum(16,8);

  // if(isTouching(movingRect,object2)){
  //   movingRect.shapeColor = "blue";
  //   object2.shapeColor = "blue";
  // }
  // else{
  // movingRect.shapeColor = "green";
  // object2.shapeColor = "green";
  // }

  
  drawSprites();
}

function sum(num1,num2){
  var result = num1+num2;
  console.log(result);
}


