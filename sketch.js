const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbinImage, paperImage

function preload(){

  paperImage = loadImage("paper.png")
  dustbinImage = loadImage("dustbingreen.png")

}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 
  paper = new Paper(100, 600, 10);

  ground = new Ground(400, 680, 800, 20);

  dustbin = createSprite(610,595,20,20);
  dustbin.addImage(dustbinImage);
  dustbin.scale = 0.45;

  dustbin1 = new Dustbin(550, 620, 20, 100);
  dustbin2 = new Dustbin(610, 660, 100, 20);
  dustbin3 = new Dustbin(670, 620, 20, 100);

  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(51,204,255);
  
  Engine.update(engine);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
  paper.display();
  ground.display();
 

  
  
  

  
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
  }
}
