const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(900,400);
   
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(450,380,900,20);
    ground2 = new Ground(390,300,250,10);
    ground3 = new Ground(700,200,200,10);
    box1= new Box(300,275,30,40);
    box2= new Box(330,275,30,40);
    box3= new Box(360,275,30,40);
    box4= new Box(390,275,30,40);
    box5= new Box(420,275,30,40);
    box6= new Box(450,275,30,40);
    box7= new Box(480,275,30,40);
    box8= new Box(330,235,30,40);
    box9= new Box(360,235,30,40);
    box10= new Box(390,235,30,40);
    box11= new Box(420,235,30,40);
    box12= new Box(450,195,30,40);
    box13= new Box(360,195,30,40);
    box14= new Box(390,195,30,40);
    box15= new Box(420,195,30,40);
    box16= new Box(390,155,30,40);

    box17= new Box(640,175,30,40);
    box18= new Box(670,175,30,40);
    box19= new Box(700,175,30,40);
    box20= new Box(730,175,30,40);
    box21= new Box(760,175,30,40);
    box22= new Box(670,135,30,40);
    box23= new Box(700,135,30,40);
    box24= new Box(730,135,30,40);
    box25= new Box(700,95,30,40);
    
    polygon = new Polygon(50,200,50);
    slingshot= new Sling(polygon.body,{x:50,y:200})
}

function draw(){
    background("black");
    Engine.update(engine);



    ground1.display();
    ground2.display();
    ground3.display();
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
    polygon.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }

}





