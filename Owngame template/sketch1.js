const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var sword_fragment1
var sword_fragment2
var boundary_walls1
var boundary_walls2
var boundary_walls3
var boundary_walls4
var platform1
var platform2
var platform3
var platform4
var roped


function setup()
{
    createCanvas(500,500);
    sword_fragment = createSprite()
    roped = new chain(sword_fragment.body,{x:200,y:100})
    
    boundary_walls1 = createSprite()
    boundary_walls2 = createSprite()
    boundary_walls3 = createSprite()
    boundary_walls4 = createSprite()
    
    
    platfrom1 = createSprite()
    platfrom2 = createSprite()
    platfrom3 = createSprite()
    platfrom4 = createSprite()
    
}

function draw()
{
background(0);

player.collide(platform1)
player.collide(platform2)
player.collide(platform3)
player.collide(platform4)

  platform1.bounceOff(boundary_walls1);
  platform1.bounceOff(boundary_walls2);
  platform1.bounceOff(boundary_walls3);
  platform1.bounceOff(boundary_walls4);

platform2.bounceOff(boundary_walls1);
  platform2.bounceOff(boundary_walls2);
  platform2.bounceOff(boundary_walls3);
  platform2.bounceOff(boundary_walls4);


platform3.bounceOff(boundary_walls1);
  platform3.bounceOff(boundary_walls2);
  platform3.bounceOff(boundary_walls3);
  platform3.bounceOff(boundary_walls4);


platform4.bounceOff(boundary_walls1);
  platform4.bounceOff(boundary_walls2);
  platform4.bounceOff(boundary_walls3);
  platform4.bounceOff(boundary_walls4);
 
platform4.velocityX = 4.5

platform1.velocityX = 2.5

platform2.velocityX = 5

platform3.velocityX = 2

if(keyDown("space")){
  arrows();

}

if(arrowsGroup.isTouching(sword_fragment1)){
   roped.fly()
   sword_fragment1.VelocityY = 3
  }


if(sword_fragment1.isTouching(boundary_walls3)){

sword_fragment1.destroy 
text("the sword is gone... we lost",x,y)

}

if(sword_fragment1.isTouching(boundary_walls3)){

sword_fragment1.hide
text("u have found the first fragment",x,y)
}
drawSprites();
}
//takes them to the next level 


function arrows(){
  arrow = createSprite(530,300,5,5)
  arrow.addImage(arrow1)
  arrow.y = bow2.y
  arrow.scale = 0.4
  arrow.lifetime = 170
  arrow.velocityX =-38
  arrowsGroup.add(arrow)
} 