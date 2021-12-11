const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var world;
var engine;
var loadBG;
function preload() {
  loadBG = loadImage("bg.png");
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,390,1200,10);
  platform = new Ground(100,350,400,250)
  box1 = new Box(1000,350,50,50); 
  box2 = new Box(800,350,50,50);
  box3 = new Box(800,300,50,50);
  box4 = new Box(1000,300,50,50);
  box5 = new Box(1000,200,50,50);
  box6 = new Box(800,250,50,50);
  pig1 = new Pig(900,350, 50,50);
  pig2 = new Pig(900,300, 50,50);
  pig3 = new Pig(900,250, 50,50);
  bird1 = new Bird(150, 130, 50,50);
  connection = new Connection({x:150, y:130},bird1.body);
}

function draw() {
  background(loadBG);
  Engine.update(engine);
  ground.display();  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  pig1.display();
  pig2.display();
  pig3.display();
  bird1.display();
  platform.display();
  connection.display();
}

function mouseDragged() {
  Matter.Body.setPosition(bird1.body,{x:mouseX, y:mouseY} )
}

function mouseReleased() {
  connection.constraintBreak();
}

