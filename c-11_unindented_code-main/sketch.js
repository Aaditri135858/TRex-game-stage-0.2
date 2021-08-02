var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudImage;

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png");
    cloudImage = loadImage("cloud.png");
}

function setup() {
    createCanvas(600, 200);

    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    //create an invisible Ground
    invisibleGround = createSprite(200,195,400,10);
    invisibleGround.visible = false

}

function draw() {
    background(180);

    //jump when the space button is pressed
    if (keyDown("space") && trex.y > 165) {
    trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }
    trex.collide(invisibleGround);

    //console.log(frameCount);

    spawnClouds();

    drawSprites();
}

function spawnClouds(){
    if(frameCount%80 === 0){
        cloud = createSprite(600,100);
        cloud.addImage(cloudImage);
        cloud.velocityX = -4;
        cloud.scale = 0.2;
        cloud.y = Math.round(random(10,60))

        console.log(cloud.depth);
        console.log(trex.depth);
        trex.depth = cloud.depth;
        trex.depth = trex.depth+1
    }
}