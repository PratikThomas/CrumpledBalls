const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject;
var world;
var Box1, Box2, Box3;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	Box1 = createSprite(width-200, height-45, 200, 10, {isStatic:true, restitution:0, friction:0.5});
	Box1.shapeColor = color("RED");

	Box2 = createSprite(1300, height-90, 10, 100, {isStatic:true, restitution:0, friction:0.5});
	Box2.shapeColor = color("RED");

	Box3 = createSprite(1500, height-90, 10, 100, {isStatic:true, restitution:0, friction:0.5});
	Box3.shapeColor = color("RED");

	paperObject=new paper(200,450,30);
	groundObject=new Ground(width/2,670,width,20);
	//Create a Ground	

	/*var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});*/

	Engine.run(engine);
	//Render.run(render);  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Box1.display();
  Box2.display();
  Box3.display();
  paperObject.display();
  groundObject.display(); 
  drawSprites();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}