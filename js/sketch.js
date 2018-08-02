function setup() {
    createCanvas(canvasWidth, canvasHeight);
    ellipseMode(RADIUS);
}

function draw() {
    background(51);

    //drawScore();
    //drawTime();

    drawBoard();
    //moveEnemy();
    drawPlayer(game.player);
    drawPlayer(game.enemy);
}
   