var rect1 = createSprite()
var rect2 = createSprite()
var rect3 = createSprite()
var rect4 = createSprite()
var rect5 = createSprite()
var rect6 = createSprite()
var rect7 = createSprite()
var rect8 = createSprite()
var rect9 = createSprite()
var rect10 = createSprite()
var rect11 = createSprite()
var rect12 = createSprite()
var rect13 = createSprite()
var rect14= createSprite()
var rect15 = createSprite()
var rect16 = createSprite()
var rect17 = createSprite()
var rect18 = createSprite()
var rect19 = createSprite()
var rect20 = createSprite()
var rect21 = createSprite()
var sword_fragment2 = createSprite()

function draw() {
  background("pink");
  createEdgeSprites();
  if (player.isTouching(sword_fragment2)) {
     player.x = 396;
     player.y = 0;
    textFont("Calibri");
    textSize(70);
     fill(rgb(64, 224, 208));
     ;
     text("You win", 130, 200);
  }
  
  player.bounceOff(edges);
  rect22.shapeColor = "yellow";
  player.shapeColor = "grey";
  fill("red");

  if(keyDown(UP_ARROW)) {
    player.velocityX = 0;
    player.velocityY = -4;
   }
    if(keyDown(DOWN_ARROW)) {
    player.velocityX = 0;
    player.velocityY = 4;
   }
    if(keyDown(RIGHT_ARROW)) {
    player.velocityX = 4;
    player.velocityY = 0;
   }
   if(keyDown(LEFT_ARROW)) {
    player.velocityX = -4;
    player.velocityY = 0;
   }
   
  if (player.collide(rect1)) {
    player.x = 10;
   player.y = 10;
 }
    if (player.collide(rect2)) {
    player.x = 10;
    player.y = 10;
  }
  
   if (player.collide(rect3)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect4)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect5)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect6)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect7)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect8)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect9)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect10)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect11)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect12)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect13)) {
    player.x = 10;
    player.y = 10;
  }
     if (player.collide(rect14)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect15)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect16)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect17)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect18)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect19)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect20)) {
    player.x = 10;
    player.y = 10;
  }
   if (player.collide(rect21)) {
    player.x = 10;
    player.y = 10;
  }