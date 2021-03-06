const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var projectile;
var platform1,platform2,ground;
var blockA1,blockA2,blockA3,blockA4,blockA5,blockA6,blockA7;
var blockB1,blockB2,blockB3,blockB4,blockB5,blockB6,blockB7,blockB8,blockB9,blockB10,blockB11,blockB12,blockB13,blockB14,blockB15;
var slingshot;

function setup(){
    var canvas = createCanvas(1450,600);
    engine = Engine.create();
    world = engine.world;

    ground = new platformOrGround(width/2,590,width,20);
    platform1 = new platformOrGround(800,450,100,20);
    platform2 = new platformOrGround(1200,300,200,20);

    projectile = new Projectile();
    slingshot = new SlingShot(projectile.body,{x:300,y:450});

    blockA1 = new towerBlock(770,435);
    blockA2 = new towerBlock(790,435);
    blockA3 = new towerBlock(810,435);
    blockA4 = new towerBlock(830,435);
    blockA5 = new towerBlock(790,405);
    blockA6 = new towerBlock(810,405);
    blockA7 = new towerBlock(800,375);

    blockB1 = new towerBlock(1130,285);
    blockB2 = new towerBlock(1150,285);
    blockB3 = new towerBlock(1170,285);
    blockB4 = new towerBlock(1190,285);
    blockB5 = new towerBlock(1210,285);
    blockB6 = new towerBlock(1230,285);
    blockB7 = new towerBlock(1250,285);
    blockB8 = new towerBlock(1270,285);
    blockB9 = new towerBlock(1170,255);
    blockB10 = new towerBlock(1190,255);
    blockB11 = new towerBlock(1210,255);
    blockB12 = new towerBlock(1230,255);
    blockB13 = new towerBlock(1190,225);
    blockB14 = new towerBlock(1210,225);
    blockB15 = new towerBlock(1200,195);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    platform1.display();
    platform2.display();

    projectile.display();
    slingshot.display();

    blockA1.display();
    blockA2.display();
    blockA3.display();
    blockA4.display();
    blockA5.display();
    blockA6.display();
    blockA7.display();

    blockB1.display();
    blockB2.display();
    blockB3.display();
    blockB4.display();
    blockB5.display();
    blockB6.display();
    blockB7.display();
    blockB8.display();
    blockB9.display();
    blockB10.display();
    blockB11.display();
    blockB12.display();
    blockB13.display();
    blockB14.display();
    blockB15.display();
}

function mouseDragged(){
    Matter.Body.setPosition(projectile.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(projectile.body);
    }
}