const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    myengine = Engine.create();
    myworld = myengine.world;

    var ground_options ={
        isStatic: true
    }
fill("red")
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(myworld,ground);

    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(myengine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    
}
