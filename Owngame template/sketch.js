var player
var sword_fragment1
var ground
var villagernpc
var wisenpc
var rope
var stone
var walls
var backgroundimg
var backgroundimg2
var platform

var level = 0;
function preload(){

backgroundimg = loadImage("images/villages.png")
playerimg = loadImage("images/player.jpg");

platform = loadImage("images/platformimg.jpg")

}

function setup(){
createCanvas(1360,700)
/*backgroundimg2 = createSprite(680,300,1360,600)
backgroundimg2.addImage(backgroundimg)
backgroundimg2.scale = 6.7
backgroundimg2.visible = false;
ground = createSprite(680,590,1360,20)
ground.shapeColor = "#2D1918"
ground.visible = false;
villagernpc = createSprite(970,555,40,40)
villagernpc.shapeColor = "green"
villagernpc.visible = false;
player = createSprite(200,555,40,40)
player.addImage(playerimg);
player.visible=false;
player.scale = 0.2;
*/
player = createSprite(200,555,40,40)
player.addImage(playerimg);

player.scale = 0.2;
player.visible=false;

}

function draw(){

background("black")

textSize(35)
stroke("white")
fill("white")

if(level ===0)
{

console.log(level)
    if(keyDown("space")){
        
        text("press space to continue",300,100)

        textSize(20)
        fill("white")
        
        text("this was once a peaceful town... the people all lived with harmony and tranquiity",50,200)
        text("But now it has all been ravaged for every penny... everyone above the age of 50 has been killed... the rest have been taken to work as slaves,including you're family",50,300)
        text("You are their only hope... legends tell of a ancient sword capable of making thier weilder a warrior...i happen to know its location but i dont have long to live...Its up to you now..good luck on your journey little hero",50,400)
        text("move forward towards the fiery cavern to obtain the legendary sword and free your family",200,500)
        text("Press 'S' to start", 50,600);

        if(keyDown("s"))
        {
            level++;
        }
        }
        
}

if(level == 1)
{
backgroundimg2 = createSprite(680,300,1360,600)
backgroundimg2.addImage(backgroundimg)
backgroundimg2.scale = 6.7

ground = createSprite(680,590,1360,20)
ground.shapeColor = "#2D1918"

villagernpc = createSprite(970,555,40,40)
villagernpc.shapeColor = "green"

player.visible=true;


    if (keyDown (RIGHT_ARROW)) {
        //player.x = player.x +3
        player.x = player.x + 3
        }
        
        if (keyDown(LEFT_ARROW)){
            player.x = player.x - 3
        
        }
        if (keyWentDown(UP_ARROW))
        {
        player.velocityY = -10
        }
        
        if (keyWentUp(DOWN_ARROW))
        {
        player.velocityY = 10
        }
        
        player.collide(ground)
        villagernpc.collide(ground)

if(player.isTouching(villagernpc))
{
    level++;
}
}

if(level == 2)
{
    background("purple");
    console.log(level);
}


drawSprites()


}


