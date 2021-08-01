
var gameState = 0;
var paddle, ball, brick, brickGroup, edges;
var score = 0;


function setup() {
    createCanvas(800,700)
    paddle = createSprite(400,600,150,10)
    ball = createSprite(300,300,10,10)
    ball.visible = false;
    ball.velocityY=8
    ball.velocityX=Math.round(random(-5,5))

    edges = createEdgeSprites()
   

    brickGroup = new Group()


    for (var i = 60; i < 770; i = i + 60){
        brick = createSprite(i,100,50,20)
        brick.shapeColor = "red"
        brickGroup.add(brick)
    }

    for (var i = 60; i < 770; i = i + 60){
        brick = createSprite(i,125,50,20)
        brick.shapeColor = "orange"
        brickGroup.add(brick)
    }

    for (var i = 60; i < 770; i = i + 60){
        brick = createSprite(i,150,50,20)
        brick.shapeColor = "yellow"
        brickGroup.add(brick)
    }

    for (var i = 60; i < 770; i = i + 60){
        brick = createSprite(i,175,50,20)
        brick.shapeColor = "green"
        brickGroup.add(brick)
    }
}

function draw() {
    background("black")
    drawSprites()

    if (gameState == 0) {
        ellipse(ball.x, ball.y, 20)
    paddle.x = mouseX

    ball.bounceOff(edges[0])
    ball.bounceOff(edges[1])
    ball.bounceOff(edges[2])
    ball.bounceOff(paddle)
    ball.bounceOff(brickGroup, brickHit)


    fill("white")
    textSize(20)
    text("Score: " + score, 700,50)

    if (score == 48) {
        gameState = 1;
    }

    if (ball.y > 700) {
        gameState = 2
    }

    }

    if (gameState == 1) {
        ball.velocityX=0
        ball.velocityY=0
        textSize(43)
        fill("green")
        text("You Win", 400,400)
        fill("white")
        textSize(20)
        text("Score: " + score, 700,50)
    }
    if (gameState == 2){
        ball.velocityX=0
        ball.velocityY=0
        textSize(43)
        fill("red")
        text("You Lose", 400,400)
        fill("white")
        textSize(20)
        text("Score: " + score, 700,50)
    }

    
    
/*/
   if (ball.isTouching(brickGroup)) {
       brickHit(ball, brick)
   }
/*/
}

function brickHit(ball, brick) {
    brick.remove()
    score = score + 1


}