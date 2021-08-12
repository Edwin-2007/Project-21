var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 696);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		isStatic:false,
		restitution	:0.3,
		friction:0,
		density:1.2

	}
    function keyPressed(){
		if(keyCode === UP_ARROW)

	}
	
	ball=Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groudObj.display()
  groundObj=new ground(width/2,670,width,20);
  leftSide = new ground(1100,600,20,120);
  drawSprites();
 
}



