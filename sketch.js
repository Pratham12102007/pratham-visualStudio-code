var cat,cat1,cat2,cat3,catImg,cat0,cat7
var mouse,mouse1,mouse2,mouse3;
var backImg,back

function preload(){
   mouse2=loadAnimation("mouse2.png","mouse3.png")
   cat2=loadAnimation("cat2.png","cat3.png") 
   cat1=loadAnimation("cat1.png")
mouse1=loadAnimation("mouse1.png")
mouse3=loadAnimation("mouse4.png")
   cat3=loadImage("cat4.png")
   catImg=loadImage("cat1.png")
   backImg=loadImage("garden.png")
}

function setup(){
    
   createCanvas(785,600) 
back=createSprite(395,300,30,30)


cat=createSprite(600,500,10,10)
cat.addAnimation("ca",cat1)
cat.scale=0.2


mouse=createSprite(200,500,10,10)
mouse.addAnimation("m",mouse1)
mouse.scale=0.15
}




function draw(){
    background("black")
    back.addImage(backImg)
   
if(keyDown("space")){
    moves();
}
cat.debug=true
cat.setCollider("rectangle",0,0,100,500)


//if(cat.x-mouse.x<cat.width/2+mouse.width/2 && mouse.x-cat.x<cat.width/2+mouse.width/2 ){
  //  cat.velocityX=0
//}

if(cat.x-mouse.x<(cat.width-mouse.width)/2+90){
    cat.velocityX=0
    cat.addAnimation("ca",cat3)
    mouse.addAnimation("m",mouse3)
}








    drawSprites();
}

function moves(){
cat.addAnimation("ca",cat2)
cat.scale=0.13
cat.velocityX=-5
mouse.addAnimation("mo",mouse2)
}

