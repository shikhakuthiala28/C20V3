const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine;
var world;
var ball, ball2;
var ground,ground2;

function setup(){

    createCanvas(600,600);

    engine=Engine.create();
    world= engine.world;

    var ball_options={
        restitution: 1.05,
        frictionAir:0.01
    }

    ball= Bodies.circle(300,300,50,ball_options);
    World.add(world,ball);

    ball2= Bodies.circle(400,100,50,ball_options);
    World.add(world,ball2);

    var ground_options={
        isStatic:true

    }
    ground=Bodies.rectangle(1,580,600,20,ground_options);
    World.add(world,ground);

    ground2=Bodies.rectangle(300,300,450,20,ground_options);
    World.add(world,ground2);



}

function draw(){

    background("grey");

    Engine.update(engine);

    ellipse(ball.position.x,ball.position.y,50)

    rect(ground.position.x,ground.position.y,600,20);

    ellipse(ball2.position.x,ball2.position.y,50);

    rect(ground2.position.x,ground2.position.y,350,20);

}