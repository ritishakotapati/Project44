function preload(){
groundImg=loadImage("track.png")
manImg=loadImage("Man.png")

}



function setup() {
  createCanvas(400,600);
  ground=createSprite(200,200);
  ground.addImage(groundImg)
  ground.velocityY=4
 
  
  man = createSprite(100,80,20,20)
  man.addImage(manImg)
  man.scale=0.4
  if(keyDown(LEFT_ARROW)){
man.velocityX=-2

  }
  if(keyDown(RIGHT_ARROW)){
    man.velocityX=2
    
      }


}

function draw() {
  background(255,255,255); 
  if(ground.y>400){

  ground.y=ground.height/2
  }
  

  drawSprites();
}