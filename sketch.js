const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;


var myEngine, myWorld;
var myGround;

var box1;
var box2;
var box3;
var box4;s

function setup() {
  createCanvas(600,600);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  myGround = new Ground(300, 550, 600, 50);
  box1 = new Box(100, 300, 50, 100);
  box2 = new Box(150, 350, 50, 50);
  box3 = new Box(200, 225, 150, 50);
  box4 = new Box(300, 335, 50, 50);

}

function draw() {
  background(0);  

  Engine.update(myEngine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  myGround.display();
}