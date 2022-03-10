class Form{
  constructor(){
    this.input = createInput("Nome");
    this.button = createButton("play");
    this.mensagem = createElement('h3');
  }
 
  apagar(){
    this.button.hide();
    this.mensagem.hide();
    this.input.hide();
  }

  display(){

      var title = createElement('h1');
      title.html("Jogo Katchow");
      title.position(displayWidth/2,0);

      this.input.position(displayWidth/2 -40, displayHeight/2 -80);
      this.button.position(displayWidth/2 +30, displayHeight/2);

      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();

          player.name = this.input.value();
          playerCount = playerCount + 1;
          player.index = playerCount;

          player.update();
          player.updateCount(playerCount);

          this.mensagem.html("Hello " + player.name);
          this.mensagem.position(displayWidth/2 -70, displayHeight/4);
      })
  }
}