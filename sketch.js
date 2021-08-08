var edges
var astronaut
var bg,bgImg
var bath,brush,drink,eat,gym,move,sleep

function preload(){
  bgImg = loadImage("iss.png")
  bath = loadAnimation("bath1.png","bath2.png")
  brush = loadAnimation("brush.png")
  drink = loadAnimation("drink1.png","drink2.png")
  eat = loadAnimation("eat1.png","eat2.png")
  gym = loadAnimation("gym1.png","gym2.png")
  move = loadAnimation("move.png","move1.png")
  sleep = loadAnimation("sleep.png")
  
}



function setup() {
  createCanvas(600,500);
   //bg = createSprite(400, 200, 50, 50);
   //bg.addImage(bgImg)

   astronaut = createSprite(300,230)
   astronaut.addAnimation("sleeping",sleep)
   astronaut.scale = 0.1
}

function draw() {
  background(bgImg);  
  drawSprites();

  edges =createEdgeSprites()
  astronaut.bounceOff(edges)

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityY = 0
    astronaut.velocityX = 0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y = 350
    astronaut.x = 150
    astronaut.velocityY = 0
    astronaut.velocityX = 0

  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymmming",gym)
    astronaut.changeAnimation("gymmming")
    astronaut.velocityY = 0
    astronaut.velocityX = 0
    astronaut.y = 350

  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.velocityY = 0
    astronaut.velocityX = 0
    astronaut.x = 300
    

  }
  if(keyDown("M")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.velocityX = 1
    astronaut.velocityY = 1
    
  }
}