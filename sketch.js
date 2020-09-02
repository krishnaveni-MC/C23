const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var Box1;
var Box2;
var box3;
var ground;

function setup()
{
 var canvas=createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 Box1=new Box(200,300,50,50);
Box2 = new Box(230, 100, 50, 100);
box3=new Box(50,300,50,50);
box4=new Box(80,200,50,50)
ground = new Ground(200, 390, 400, 20);
}

function draw()
{

background("purple");
Engine.update(engine);

Box1.display();
Box2.display();
box3.display();
box4.display();
ground.display();
console.log(Box2.body.position.x);
console.log(Box2.body.position.y);
console.log(Box2.body.angle);
}


