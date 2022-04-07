class Form{
  constructor(){
    this.input = createInput("Nome");
    this.button = createButton("play");
    this.mensagem = createElement('h3');
    this.reset = createButton('reset');
  }
 
  apagar(){
    this.button.hide();
    this.mensagem.hide();
    this.input.hide();
  }

  elementsPosition(){
    this.input.position(width/2 - 110, height/2 - 80);
    this.button.position(width/2 - 90, height/2 - 20);
    this.mensagem.position(width/2 - 300, height/2 - 100);
    this.reset.position(displayWidth -100, 20);
    }

  elementsStyle(){
    this.input.class("customInput");
    this.button.class("customButton");
    this.mensagem.class("greeting");
    this.reset.class("customButton");
  }

  display(){

      var title = createImg("./assets/TITULO.png");
      title.class("gameTitle");
      title.position(120, 50);
      
      this.elementsPosition();
      this.elementsStyle();

      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();

          player.name = this.input.value();
          playerCount = playerCount + 1;
          player.index = playerCount;

          player.update();
          player.updateCount(playerCount);

          var msg = `olá, ${this.input.value()}</br> espere os outros jogadores entrarem`;
          this.mensagem.html(msg);
      });

      this.reset.mousePressed(()=>{
        game.reset();
        window.location.reload();
      })
  }
}