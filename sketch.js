const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var obj1;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic : true
  }

  var b_option = {
    restitution : 0.5
  }

  obj1 = Bodies.circle(200,100,25,b_option);
  World.add(world,obj1);
  console.log(obj1.position.x);

  ground = Bodies.rectangle(200,380,400,20,option);
  World.add(world,ground);
  
}

function draw() {
  background("lightblue");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(obj1.position.x,obj1.position.y,25,25);
  
}