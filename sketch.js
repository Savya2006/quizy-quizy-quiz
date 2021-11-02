var canvas;
var BG;
var database;
var form, player;
var playerCount;
var sound;

function preload() {
  BG = loadImage("assets/quizy.jpg")
  sound = loadSound("Kbc Clock.mp3");
} 

function setup() {
  sound.play(true);
  canvas = createCanvas(1200,500);
  
  database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
  background(BG);

textSize(30);
fill("WHITE");
text("Ques-What is the # of the parking spot covered up by the car?",180,170);
text("90",250,310);
text("86",250,400);
text("87",725,310);
text("80",720,400);

drawSprites();
}


