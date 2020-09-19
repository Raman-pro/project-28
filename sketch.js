const Engine = Matter.Engine;
World = Matter.World;
Bodies = Matter.Bodies;
Body = Matter.Body;
Constraint = Matter.Constraint;
let engine, world,
    treeImage, tree, boy, boyImage, mangoes, mangoImage, ground, personImg, rope, stone, stoneImg;
mangoes = []

function preload() {
    treeImage = loadImage("/images/tree.png");
    mangoImage = loadImage("/images/mango.png");
    personImg = loadImage("/images/boy.png");
    stoneImg = loadImage("/images/stone.png");
}

function setup() {
    createCanvas(1300, 700);


    engine = Engine.create();
    world = engine.world;
    ground = new Ground(650, 674, 1300, 10)
    tree = new Tree(650 + 350, 500, 350, 350, treeImage)
    // mangoes.push(new Mango(400,300,50,50))
    // mangoes.push(new Mango(400,300,50,50))
    // mangoes.push(new Mango(400,300,50,50))
    // mangoes.push(new Mango(mangoImage,400,300,50,50))
    createNewMangoes()
    Engine.run(engine);
    boy = new Boy(personImg, 90 + 90, 600, 200, 200);
    stone = new Stone(stoneImg, 70 + 90, 550, 80, 80);
    rope = new Line(stone.body, {x: 40 + 90, y: 550})

}

function draw() {
    rectMode(CENTER);
    background("orange");
    Engine.update(engine)
    boy.display();
    tree.display();
    ground.display();
    mangoes.forEach(mango => {
        mango.display();
    })
    stone.display()
    rope.display()
    mangoes.forEach(mango => {
        if(collision(mango,stone)){
            console.log("hello")
        }else{
            // console.log("nope")
        }
    })
}


function createNewMangoes() {
    for (var i = 0; i < 4; i++) {
        console.log(i)
        var mx, my;
        mx = i === 0 ? 670 : i === 1 ? 600 : i === 2 ? 650 : i === 3 ? 690 : null;
        my = i === 0 ? 370 : i === 1 ? 390 : i === 2 ? 440 : i === 3 ? 430 : null;
        mangoes.push(new Mango(mangoImage, mx + 350, my, 50, 50));
    }
}

function touchMoved() {
    Body.setPosition(stone.body, {x: (mouseX), y: mouseY})
}
function mousePressed(){
    Body.setPosition(stone.body, {x: (mouseX), y: mouseY})
}
function mouseReleased() {
    rope.fly()
    // Body.applyForce(stone.body, {x: 500, y: 500})
}
function collision(s1,s2){
    let pos1=s1.body.position.x;
    let pos2=s2.body.position.x;

    var distance=dist(s1.x,s1.y,s2.x,s2.y);
    return distance<=s1.width+s2.width
}