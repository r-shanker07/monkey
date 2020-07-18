//Global Variables
var monkey, monkey_running, banana, back, bananaImage, obstacle, obstacle_image, backImage, score, groundImage, foodGroup,obstacleGroup


function preload(){
  backImage = loadImage("jungle.jpg")
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  bananaImage = loadImage("Banana.png")
  obstacleImage = loadImage("stone.png")
}


function setup() {
  createCanvas(600,300);
  
   back = createSprite (400,200,20,20)
  back.addImage("back",backImage)
  back.scale=0.9
  
  ground = createSprite(300,290,600,20)
  ground.visible=false
  
  monkey = createSprite(100,250,20,20)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1
  

  
  foodGroup = createGroup()
  obstacleGroup = createGroup()
 
}


function draw(){
 background(255); 
    
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: "+ score,500,50)
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
    if (monkey.isTouching(foodGroup)){
  score = +1
  foodGroup.destroyEach()
      
    if (monkey.isTouching(obstacleGroup)){
    monkey.scale = 0.9
    }
  
    switch(score){
      case 10: monkey.scale=0.12;
              break;
      case 20: monkey.scale=0.14;
              break;
      case 30: monkey.scale=0.16;
              break;
       case 40: monkey.scale=0.18;
              break;
    }
    }
  

  spawnFood()
  spawnObstacle()
 drawSprites() 
}

function spawnFood()  {
if (frameCount % 100 === 0) {
    var banana = createSprite(600,320,40,10);
    banana.y = Math.round(random(100,200));
    banana.addImage("banana", bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
    
    banana.lifetime = 120;
    
    foodGroup.add(banana);
   }
}

function spawnObstacle(){
 if (frameCount % 220 === 0) {
    var obstacle = createSprite(600,240,40,10);
    obstacle.y = 240;
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.22;
    obstacle.velocityX = -5;
    
    obstacle.lifetime = 120;
    
    obstacleGroup.add(obstacle);
  }
}