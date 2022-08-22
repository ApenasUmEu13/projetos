

var engine, world;
var circle, rectangle, rectangle2, rectangle3;
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
	
			circle = Bodies.circle(220, 250,
				20, PROPRIEDADES2)
				rectangle2 = Bodies.rectangle(200, 160,
					2000, 10, PROPRIEDADES)
					rectangle3 = Bodies.rectangle(300, 200,
						20, 50, PROPRIEDADES)

				World.add(world, rectangle)
				World.add(world, circle)
				World.add(world, rectangle2)
				World.add(world, rectangle3)




ellipseMode(RADIUS)
}


function draw() {
  rectMode(CENTER);
  background(0);
fill("red")
  rect(rectangle.position.x,
	rectangle.position.y, 20, 50);
	fill("red")
  rect(rectangle2.position.x,
	rectangle2.position.y, 2000, 10);
fill("blue")

if(keyIsDown(UP_ARROW)){
engine.world.gravity.y = -1;
}
ellipse(circle.position.x,
		circle.position.y, 20);

		fill("red")
		rect(rectangle3.position.x,
		  rectangle3.position.y, 20, 50);

  Engine.update(engine);
  drawSprites();
 
}


