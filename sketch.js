var jack,bg,playbutton,bgImage
var gameState=0
var score=0;
var flag=true
var coingroup
var temp

function preload() {
  bgImage=loadImage("bgscreen.jpeg")
jackImage=loadImage("jackstanding.png")
playImage=loadImage("play.png")
landImage=loadImage("platform.png")
gameOverIMG=loadImage("gameover.png")
bagroundIMG=loadImage("baground.webp")
coinIMG=loadImage("coin.png")
}

function setup() {
  createCanvas(500,700);
  bgscreen=createSprite(250,350)
 bgscreen.scale=0.8
jack=createSprite(400,270,50,50)
jack.scale=0.6
playButton=createSprite(160,500,70,70)
playButton.scale=0.3

jack.addImage(jackImage)
playButton.addImage(playImage)

bgscreen.addImage(bgImage)




landgroup=new Group()
coingroup=new Group()

}

function draw() {


  

  background("red");

  drawSprites()


  if(mousePressedOver(playButton)){
gameState=1

fixedland=createSprite(250,350,8,8)
jack.x=250
fixedland.addImage(landImage)
fixedland.scale=0.18
landgroup.add(fixedland)

  }
if(gameState===1){
  bgscreen.addImage(bagroundIMG)
  jack.collide(fixedland)
  playButton.visible=false

  if(jack.isTouching(coingroup,collect)){
   
  score = score+10
 
  


  }

  if(score===10){
   
    fixedland.remove()
   

  
    }
  
    stroke("red")
    strokeWeight(4)
    fill("yellow")
    textSize(27)
    text("SCORE="+score,325,40)


if(jack.y>700){
  gameState=2
}

jack.velocityY+=1

if(keyDown(UP_ARROW)&& jack.collide(landgroup)){

  jack.velocityY=-20



}

if(keyDown(LEFT_ARROW)){

jack.x-=5


}

if(keyDown(RIGHT_ARROW)){

  jack.x+=5
  
  
  }

jack.collide(landgroup)



createPlatform ()


}

if(gameState===2){
gameOver=createSprite(225,350)
gameOver.addImage(gameOverIMG)
gameOver.scale=0.8

}










  

  
  


}

function collect (a,b) {

b.destroy()



}



function createPlatform (){
  if(frameCount%100===0){
    
  land=createSprite(random(50,460),-10,30,30)
  land.addImage(landImage)
  land.scale=0.18

  landgroup.add(land)
 land.velocityY =2+score/70

 



   
 coin=createSprite(land.x,land.y-33,30,30)
 coin.addImage(coinIMG)
 coin.scale=0.08

 coingroup.add(coin)
 coin.velocityY=2+score/70

  }

}