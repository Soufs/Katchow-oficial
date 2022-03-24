var database, gameState = 0, playerCount, allPlayers, distance = 0;
var form, player, game;
var car1, car2, car3, car4, cars;
var car1Img, car2Img, car3Img, car4Img;
var groundImg, trackImg, trackImg2;

function preload(){
trackImg = loadImage("images/track.jpg");
groundImg = loadImage("images/ground.png");

car1Img = loadImage("images/car1.png");
car2Img = loadImage("images/car2.png");
car3Img = loadImage("images/car3.png");
car4Img = loadImage("images/car4.png");

trackImg2 = loadImage("assets/planodefundo.png");
}

function setup(){
    database = firebase.database();
    //reset()
    game = new Game();
    game.getState();
    game.start();

    createCanvas(displayWidth-20, displayHeight-30);
    
}

function draw(){
    background ("#c68767");

    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }

    if(gameState === 2){
        game.end();
    }

    drawSprites();
}

function reset (){
database.ref ("/").update ({
    playerCount: 0, gameState: 0
})

}


