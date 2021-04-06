
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var Start=0
var Play=1
var Gamestate=Start
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5,stand1,stand2,stand3,stand4;
var world;

function preload()
{

	backIMG=loadImage("bg.jpg")
	back2IMG=loadImage("bg2.jpg")
	tableImg=loadImage("table.png")
	standImg=loadImage("stick.png")

}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);

	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	bob3 = new bob(420,575,40)
	bob4 = new bob(460,575,40)
	bob5 = new bob(500,575,40)
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body,-0, 0)
	rope4=new rope(bob4.body,roofObject.body,+40, 0)
	rope5=new rope(bob5.body,roofObject.body,+80, 0)

	table=createSprite(400, 640, width,10);
	table.addImage(tableImg)
	table.scale=0.7
    table.visible=true

	stand1=createSprite(280, 373, width,10);
	stand1.addImage(standImg)
	stand1.scale=0.35
    stand1.visible=true

	stand2=createSprite(500, 373, width,10);
	stand2.addImage(standImg)
	stand2.scale=0.35
    stand2.visible=true

	//stand1=new Stand(290,375,5,250)
	//stand2=new Stand(400,375,5,250)
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);

  if(Gamestate===Start)
  {
	background(back2IMG);
	textSize(70)
	fill("yellow");
	text("Press 'Enter' to Start",70,590)


  }

  if(keyCode===ENTER)
  {
	  Gamestate=Play
  }

  if(Gamestate===Play)
  {
  background(backIMG);
  drawSprites();
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  }
  
 
}

function keyPressed()
{
if(keyCode===UP_ARROW)
{
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40,y:-55});
}
}




