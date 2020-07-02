var moving,fixed;
var bouncy,stay;
function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 50, 50);
  fixed = createSprite(500,250,50,50);
  moving.shapeColor="violet";
  fixed.shapeColor="green";
  bouncy=createSprite(600,250,50,50);
  stay=createSprite(400,250,50,50);
  bouncy.shapeColor="red";
  stay.shapeColor="yellow";
  bouncy.velocityX=-3;
  stay.velocityX=0;
}

function draw() {
  background(0);  
  drawSprites();
  moving.x=World.mouseX;
  moving.y=World.mouseY;
 if (isTouching(moving,fixed)){
  moving.shapeColor="white";
  fixed.shapeColor="blue";
 }
 else{
  moving.shapeColor="violet";
  fixed.shapeColor="green";
 }
bounceOff(bouncy,stay);
}
function isTouching(object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2&&
    object2.x-object1.x<=object1.width/2+ object2.width/2&&
    object1.y- object2.y<=object1.height/2+ object2.height/2&&
    object2.y-object1.y<=object1.height/2+ object2.height/2 ){
 return true;
 
   }
   else{
     return false;
   }
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2&&
    object2.x-object1.x<=object1.width/2+ object2.width/2 ){
      object1.velocityX=-1*object1.velocityX; }
      if(object1.y- object2.y<=object1.height/2+ object2.height/2&&
        object2.y-object1.y<=object1.height/2+ object2.height/2){
          object1.velocityY=-1*object1.velocityY;
        }
}