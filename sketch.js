let score = 0;

planeet1 = new Planeet (100, 10, 'red', 3, 50)
planeet2 = new Planeet (400, 10, 'blue', 4, 20)
planeet3 = new Planeet (300, 100, 'yellow', 4, 40)
planeet4 = new Planeet (500, 100, 'green', 2, 40)

let planeten; 

let ruimteschip;

let gameOver;

let startGame = false; 

// Toon de kleur dat geraakt moet worden 
let targetColor; 
// Toon de kleur om de zoveel seconden 
let showColor; 
// Verander de kleur van de tekst zodat het iets moeilijker is om te onthouden 
let textColor; 
// Vertaling naar het nederlands 
let colorDutch = {
  'red': 'ROOD',
  'blue': 'BLAUW', 
  'yellow': 'GEEL',
  'green': 'GROEN'
}
//Audio toevoegen 
let playingSound = new Audio('audio/song.mp3');

//Achtegrond en font 
function preload() {
  img = loadImage('images/sky.jpg');
  font = loadFont('font/PressStart2P-Regular.ttf');
}

function setup() {
  startDisplay();
  createCanvas(600, 900);
}

function keyPressed(){
  if (keyCode === 32 && startGame === false){
    startGame = true; 
    gameOver = false;
// Array van planeten
  planeten = [planeet1, planeet2, planeet3, planeet4]
// Ruimteschip
  ruimteschip  = new Ruimteschip (300, 840, 8);
// Om de 2 seconden komen er nieuwe planeten bij
  setInterval(spawnNewPlaneet, 2000)
// Geef een random target kleur 
  targetColor = getRandomColor()
// Geef een random tekst kleur en zorg ervoor dat er de tekstkleur en target kleur niet dezelfde kleur zijn 
  textColor = getRandomColor()
    while (textColor === targetColor){
      textColor = getRandomColor()
    }
// Toon de target kleur voor 2 seconden
  startTime = millis()
// Om de 15 seconden wordt er een nieuwe target kleur gegeven
  setInterval(timeforTargetColor, 15000)
  }
  if(keyCode === '' && gameOver == true || gameOver == true){
    location.reload()
}
}
  
function draw() {
if (!startGame){
  startDisplay()
} else{
 if (gameOver == false){
   playingSound.play()
   image(img, 0,0, width, height);
   ruimteschip.display();
   ruimteschip.move()
   fill(255)
   text(`Score:${score}`, width/2, 50)
 if (millis() - startTime < 1000) {
   fill(textColor);
   textAlign(CENTER, CENTER);
   textSize(30);
   text(`${colorDutch[targetColor]}`, width/2, 450);
}
for(let i = 0; i < planeten.length; i++){
  planeten[i].display()
  planeten[i].move()
// Wanneer de target kleur van de planeet en de ruimteschip elkaar raken wint de speler 10 punten 
 if(planeten[i].isColliding(ruimteschip)){
   if(planeten[i].color == targetColor){
     score +=10
   }
// Als de target kleur niet geraakt wordt, verliest de speler 
   if(planeten[i].color != targetColor){
     gameOver = true;
     fill(255);
     textAlign(CENTER, CENTER);
     textSize(40);
     text("GAME OVER!", width/2, height/2);
   }
   planeten.splice(i, 1);
 }
}
// Gewonnen 
if (score >= 100) {
  gameOver = true;
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("YOU WIN!", width/2, height/2);
}
}
}
}
// Nieuwe planeten 
function spawnNewPlaneet(){
  let x = random(0, width);
  let y = 0;
  let randomSize = round(random(20,60))
  let colors= ['yellow', 'red', 'blue', 'green'];
  let colorIndex = Math.floor(Math.random()* colors.length); 
  let randomColor = colors[colorIndex];
  let randomSpeed = round(random(3,9))
  const planeet = new Planeet(x, y, randomColor, randomSpeed, randomSize)
  planeten.push(planeet)
  console.log(planeet)
}

// Random kleur 
function getRandomColor(){
  let colors= ['yellow', 'red', 'blue', 'green'];
  let colorIndex = Math.floor(Math.random()* colors.length); 
  return colors[colorIndex];
}

// Random target kleur 
function timeforTargetColor(){
  targetColor = getRandomColor()
  startTime = millis()
  textColor = getRandomColor()
  while (textColor === targetColor){
    textColor = getRandomColor()
  }
}

// welkom
function startDisplay(){
  image(img, 0,0, width, height);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255);
  textFont(font)
  text("Welkom!", width/2, 300);
  textSize(30);
  text("Begin met ", width/2, 430);
  text("de planeten jacht!", width/2, 490);
}