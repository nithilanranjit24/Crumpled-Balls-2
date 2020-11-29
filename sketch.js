
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbin1,dustbin2,dustbin3;
var dustbin,dustbinImg;

function preload()
{
	dustbinImg = loadImage("Dustbin.png");
	paperBallImg = loadImage("paper.png");
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper = new Paper(400, 650, 50);
	var options ={
		isStatic : true
	};
	 ground = Bodies.rectangle(400,680,800,20,options);
	World.add(world,ground)
	 Engine.run(engine);
  
	 dustbin1 = Bodies.rectangle(670,600,145,10,options);
	World.add(world,dustbin1);

	dustbin2 = Bodies.rectangle(745,600,10,100,options);
	World.add(world,dustbin2);
	
	dustbin3 = Bodies.rectangle(600,600,10,100,options);
	World.add(world,dustbin3);

	dustbin = createSprite(670,600,100,100);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.9;

	
	 
	
}


function draw() {
background("white");
	rectMode(CENTER);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  paper.display();

  fill("white");
  stroke("white")
  push();
  translate(dustbin1.position.x,dustbin1.position.y);
  rect(0,0,145,10);
  pop();
  push();
  translate(dustbin2.position.x,dustbin2.position.y);
  rect(0,0,10,100);
  pop();
 push();
 translate(dustbin3.position.x,dustbin3.position.y);
  rect(0,0,10,100);
  pop();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 38){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-500})
		
	}
}

