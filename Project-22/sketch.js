var helicopter, helicopter0; 

var package , package0, packageBody;

var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//load images
function preload()
{
	helicopter0 = loadImage("helicopter.png");

	package0 = loadImage("package.png");
}

function setup() {

	createCanvas(800, 700);

	//to align sprite to center
	rectMode(CENTER);
	
	//to create package sprite
	package = createSprite(width/2, 50, 10,10);
	//to add image to sprite
	package.addImage(package0);
	//size 
	package.scale=0.2
	
	//to create helicopter sprite
	helicopter = createSprite(width/2, 200, 10,10);
	//to add image to sprite
	helicopter.addImage(helicopter0);
    //size
	helicopter.scale=0.6;

	//to create ground sprite
	groundSprite=createSprite(width/2, height-35, width,10);
	//colour
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//package
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic : true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic : true});
	 World.add(world, ground);
	 
	 console.log("Package Body===>", packageBody);

	Engine.run(engine);
  
}

function draw() {

  Engine.update(engine);	

  //to align sprite to center	
  rectMode(CENTER);

  //background colour
  background(0); 

  //position of package
  package.x= packageBody.position.x 
  package.y= packageBody.position.y

  drawSprites();
 
}

function keyPressed() {

 if (keyCode === DOWN_ARROW ) {
	
	//packageBody = {restitution:0.5,isStatic : false}
	Matter.Body.setStatic(packageBody, false);
	

  }
}


