var engine, world;
var circle, rectangle;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	
	
	
	
	PROPRIEDADES = {
		isStatic: true,
		}

		PROPRIEDADES2 = {
			isStatic: false,
			}

		rectangle = Bodies.rectangle(200, 200,
			20, 50, PROPRIEDADES)
	
			circle = Bodies.circle(500, 200,
				50, PROPRIEDADES2)


				World.add(world, rectangle)
				World.add(world, circle)





}


function draw() {
  rectMode(CENTER);
  background(0);
fill("red")
  rect(rectangle.position.x,
	rectangle.position.y, 20, 50);
fill("blue")
engine.world.gravity.y = -1;
	ellipse(circle.position.x,
		circle.position.y, 50);

  Engine.update(engine);
  drawSprites();
 
}



