class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.input2 = createInput("").attribute("placeholder", "Enter the option");
    this.playButton = createButton("Submit");
    this.titleImg = createImg("assets/PS.png", "game title");
    this.greeting = createElement("h2");
    this.S = loadSound("Kbc Option Lock Tune.mp3");
  }

  setElementsPosition() {
    this.titleImg.position(360,2);
    this.input.position(100,440);
    this.input2.position(318,440);
    this.playButton.position(600,440);
    this.greeting.position(20, 400);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.input2.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }


  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.input2.hide();
    this.S.hide();
  }
        //$- a pointer which goes to the input and get it back
  handelMousePressed() {
    this.playButton.mousePressed( () =>{
       this.input.hide();
       this.input2.hide();
       this.playButton.hide();
       sound.stop();
       this.S.play();
       var message = `
      HELLO! ${this.input.value()} , Thanks for your answer` ;
      this.greeting.html(message);
       });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handelMousePressed();
  }
}
