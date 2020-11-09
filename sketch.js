var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var lWall,bWall,rWall;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-34, width,20);
	groundSprite.shapeColor="white";

	lWallSprite=createSprite((width/2)-130,height-125,30,130);
	lWall=Bodies.rectangle((width/2)-130,height-125,30,130,{isStatic:true});
	lWallSprite.shapeColor="red";
	World.add(world, lWall);
	rWallSprite=createSprite((width/2)+130,height-125,30,130);
	rWall=Bodies.rectangle((width/2)+130,height-125,30,130,{isStatic:true});
	rWallSprite.shapeColor="red";
	World.add(world, rWall);
	bWallSprite=createSprite((width/2),height-75,230,30);
	bWall=Bodies.rectangle((width/2),height-75,230,30,{isStatic:true});
	bWallSprite.shapeColor="red";
	World.add(world, bWall);


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.2, isStatic:true});
	World.add(world, packageBody);
	packageSprite.scale=0.2;
	packageSprite.debug=true;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundSprite.x=ground.position.x;
  groundSprite.y=ground.position.y;

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown("DOWN_ARROW")) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



