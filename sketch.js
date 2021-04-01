
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundSprite, ground;
var Box1, Box2, Box3;
var paper, paperSprite;

function setup() {
	createCanvas(1500, 700);

	paperSprite=createSprite(20, 80, 35, 35);
	//paper.shapeColor = color(0);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	Box1 = createSprite(1300, height-45, 200, 10, {isStatic:true});
	Box1.shapeColor = color("RED");

	Box2 = createSprite(1200, height-90, 10, 100, {isStatic:true});
	Box2.shapeColor = color("RED");

	Box3 = createSprite(1400, height-90, 10, 100, {isStatic:true});
	Box3.shapeColor = color("RED");

	engine = Engine.create();
	world = engine.world;

	paper = Bodies.circle(50 , 645 , 5 , {restitution:0, isStatic:true, friction:0.5, density:1.2});
	World.add(world, paper);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
}


function draw() {
  background("Black");
  Engine.update(engine);
  paperSprite.x= paper.position.x;
  paperSprite.y= paper.position.y;
  paper.velocityY = -12;
  keyPressed();
  drawSprites(); 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
	  Matter.Body.setStatic(paper,false);
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85});
  }
}