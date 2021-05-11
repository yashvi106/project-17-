var bull,background0
var blueBalloon,blue_balloon0
var greenBalloon,green_balloon0
var pinkBalloon,pink_balloon0
var bow,bow0
var arrow0

function preload(){
 //load your images here 
  
 background0 = loadAnimation("background0.png")
blue_balloon0 = loadAnimation("blue_balloon0.png"
);
 green_balloon0= loadAnimation("green_balloon0.png"

);
  pink_balloon0   = loadAnimation("pink_balloon0.png"

);
 
bow0 = loadAnimation("bow0.png")
 arrow0 = loadAnimation("arrow0.png")                    

}
function setup() {                                     
  createCanvas(385, 400,10, 10);
  
  //create the balloons
   bull = createSprite(203,203,50,10)
  
  //arrows()
  
   for (var i = 50; i < 400; i=i+50) {
 blueBalloon = createSprite(45, i,10,10);
   blueBalloon.addAnimation("flying",blue_balloon0);
     
    
  blueBalloon.scale = 0.1
   }
   for (var ii = 100; ii < 400; ii=ii+50){
 greenBalloon = createSprite(85,ii ,10,10);
      greenBalloon.addAnimation("flying",green_balloon0)
  greenBalloon.scale = 0.08
  
   }
   for (var iii = 150; iii < 400; iii=iii+50){
 pinkBalloon   = createSprite(120, iii,10,10);
  pinkBalloon.addAnimation("flying",pink_balloon0)
  pinkBalloon.scale = 1
   }
   bow = createSprite(360,200,20,20)
  
  
  //adding animation
 bull.addAnimation("moving",background0)
 bull.scale = 1.2
bull.x = bull.width /2;
  bull.velocityX = -2; 
//bull.x = bull.width /2;
// bull.velocityX = -4;
  
 
 
 
  
  
bow.addAnimation("moving",bow0)
  bow.velocityY = 3

}                 

function draw() {

  //add code here
  background("background0.png")
     if (bull.x < 0){
  bull.x = bull.width/2;
  }

bow.y = World.mouseY
//arrows()
   if (keyDown("space"))
   {
     arrows();
   }
 drawSprites();
  }

function arrows(){ 
   arrow = createSprite(360,100,5,10);
  arrow.addAnimation("moving",arrow0)
  arrow.scale = 0.3
    arrow.velocityX =-6
    
    /*var temp_arrow = createArrow()
    temp_arrow.addImage(arrowImage)
    temp_arrow.y=boy.y*/
 //  }

 
}
