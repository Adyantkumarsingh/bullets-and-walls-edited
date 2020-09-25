var bullet,wall,speed,weight;

var thickness,damage;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  wall = createSprite(1500,200,60,height/2);
  thickness = random(22,83);
  weight = random(30,52);
  bullet = createSprite(50,200,0,50)
  bullet.velocityX = speed;
  

}

function draw() {


 



 if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
   damage  = weight*speed*speed /(thickness*thickness*thickness)

  if(damage>10){

    wall.shapeColor = color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }

}
  drawSprites();


 }


function hasCollided(bullet,wall){

    bulletRightEdge = bullet.x + bullet.width
   wallLeftEdge = wall.x

   if(bulletRightEdge>= wall.wallLeftEdge)
   {
     return true
   }
   return false
}















 
