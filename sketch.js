const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygonImg

function preload()
{
  polygonImg = loadImage("polygon.png");
}

function setup() 
{
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  ground = new Ground(400,370,1600,20)

  platform1 = new Ground(300,300,200,10)
  platform2 = new Ground(600,225,200,10)

  box1 = new Box(300,285,20,20)
  box2 = new Box(325,285,20,20)
  box3 = new Box(275,285,20,20)
  box4 = new Box(350,285,20,20)
  box5 = new Box(250,285,20,20)
  box6 = new Box(375,285,20,20)
  box7 = new Box(225,285,20,20)

  box8 = new Box(300,265,20,20)
  box9 = new Box(325,265,20,20)
  box10 = new Box(275,265,20,20)
  box11 = new Box(350,265,20,20)
  box12 = new Box(250,265,20,20)

  box13 = new Box(300,245,20,20)
  box14 = new Box(325,245,20,20)
  box15 = new Box(275,245,20,20)

  box16 = new Box(300,225,20,20)


  box17 = new Box(600,210,20,20)
  box18 = new Box(625,210,20,20)
  box19 = new Box(575,210,20,20)
  box20 = new Box(650,210,20,20)
  box21 = new Box(550,210,20,20)
  box22 = new Box(675,210,20,20)
  box23 = new Box(525,210,20,20)

  box24 = new Box(600,190,20,20)
  box25 = new Box(625,190,20,20)
  box26 = new Box(575,190,20,20)
  box27 = new Box(650,190,20,20)
  box28 = new Box(550,190,20,20)

  box29 = new Box(600,170,20,20)
  box30 = new Box(625,170,20,20)
  box31 = new Box(575,170,20,20)

  box32 = new Box(600,150,20,20)

  polygon = Bodies.circle(100,200,20);
  World.add(world,polygon)

  slingshot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(0); 
  Engine.update(engine) 
  
  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,40,40)

  ground.display();

  platform1.display();
  platform2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();


  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();

  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  box29.display();
  box30.display();
  box31.display();

  box32.display();

  slingshot.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
  slingshot.fly();
}