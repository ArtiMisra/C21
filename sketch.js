function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="green";
  
  fixedrect=createSprite(600, 200, 50, 50);
  fixedrect.shapeColor="green";

  movingrect2=createSprite(100, 200, 50, 50);
  movingrect2.shapeColor="yellow";
  movingrect2.velocityX=2;

  movingrect3=createSprite(400, 200, 50, 50);
  movingrect3.shapeColor="yellow";
  movingrect3.velocityX=-2;

  movingrect4=createSprite(400, 400, 50, 50);
  movingrect4.shapeColor="yellow";
  movingrect4.velocityY=-2;

  movingrect5=createSprite(400, 200, 50, 50);
  movingrect5.shapeColor="yellow";
  movingrect5.velocityY=2;

}

function draw() {
  background("black");
  
movingrect.x=mouseX
movingrect.y=mouseY

if(isTouching(movingrect,fixedrect)){
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
}

else{
  movingrect.shapeColor="blue";
  fixedrect.shapeColor="blue";
}

bounceOff(movingrect2,movingrect3);
bounceOff(movingrect4,movingrect5);
  drawSprites();
}





















