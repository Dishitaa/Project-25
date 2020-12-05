
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, ball, dustbin1;

function preload()
{
  dustbinimage = loadImage("dustbingreen.png")

  ballimage = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	dustbin1 = new dustbin(700,560,20,200);

	ball = new paper(100,600,45);

	ground1 = new ground(400,650,800,20);

  Engine.run(engine);
  
  ball.scale=0.1;
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  Engine.update(engine);
  ground1.display();
  ball.display();
  image(ballimage,1000,330,200,200);
  image(dustbinimage,610,510,100,150)
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-85});
  }
}





