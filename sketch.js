const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;




function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,500,100,100);
    box2 = new Box(900,500,100,100);
    box3 = new Box(600,400,100,100);
    box4 = new Box(900,400,100,100);
    box5 = new Box(750,300,100,100);

    ground = new Ground(600,height,1200,50);

    pig1 = new Pig(750,500);
    pig2 = new Pig(750,400);

    bird = new Bird(200,560);
    
    log1 = new Log(750, 450, 440, PI/2);
    log2 = new Log(750,330, 440, PI/2);
    log3 = new Log(700,200, 240, PI/6);
    log4 = new Log(800,200, 240, -PI/6);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    bird.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}    