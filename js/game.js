class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var countRef = await database.ref('playerCount').once("value");
            if(countRef.exists()){
                playerCount = countRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage("image1", car1Img);

        car2 = createSprite(300,200);
        car2.addImage("image2", car2Img);

        car3 = createSprite(500,200);
        car3.addImage("image3", car3Img);

        car4 = createSprite(700,200);
        car4.addImage("image4", car4Img);

        cars = [car1, car2, car3, car4];
    }

    play(){
        form.apagar();
        Player.getPlayerInfo();

        player.getCarsAtEnd();

        if(allPlayers !== undefined){
           background ("#c68767");    
           image(trackImg, 0, -displayHeight * 4, displayWidth, displayHeight* 5);
           var index = 0;
           var x = 175;
           var y;
            for(var plr in allPlayers){
                index = index + 1;
                x = x + 200;
                y = displayHeight -allPlayers[plr].distance;
                cars[index -1].x = x;
                cars[index -1].y = y;

                if(index === player.index){
                    stroke(10);
                    fill("red");
                    ellipse(x, y, 60, 60);
                    cars[index -1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index -1].y;
                }
            }
            
            drawSprites();
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance +10;
            player.update();
        }
        
        if(player.distance > 3860){
            gameState = 2;
            player.rank = player.rank +1;
            Player.updateCarsAtEnd(player.rank);
            this.showRanking();
        }
    }

    end(){
      console.log("Fim de Jogo");
      console.log(player.rank);
    } 

    reset(){
      database.ref ("/").update ({
      playerCount: 0, gameState: 0, players: {}, carsAtEnd: 0
    })
    }

    showRanking(){
        swal({
            title: `incrível! ${"\n"} ${player.rank}º lugar!`,
            text: "você alcançou a linha de chegada!",
            imageUrl: "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
            imageSize: "100x100",
            confirmButtonText: "Okay!"
        })
    }
}