
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var lw,bw,rw;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;


  waste= new Paper(50, height-100, 50, 50);
  gr= new Ground (400, 670, 1500, 15);
  dust=new Dustbin(800,670)

  Engine.run(engine);
  
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  waste.display();
  gr.display();
  dust.display();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(waste.body,waste.body.position,{x:120,y:-120})
  }
}



