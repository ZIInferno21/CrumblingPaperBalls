
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var groundLeft;
var groundRight;
var ball;

function preload(){
	
}

function setup() {
	createCanvas(800, 400);
    

	engine = Engine.create();
	world = engine.world;
    
	var ballOptions = {
		isStatic:false,
        restitution:0.3,
		friction:0,
		density:1.2
	}


	ball = Bodies.circle(260,100,20,ballOptions)
	//Create the Bodies Here.
	World.add(world,ball);
	ground = new Ground(width/2,390,width,20);
	groundLeft = new Ground(500,330,20,120);
	groundRight = new Ground(650,330,20,120);




	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:30,y:-85});
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  groundLeft.display();
  groundRight.display();
  fill("cyan");
  ellipse(ball.position.x,ball.position.y,40,40);
 
}



