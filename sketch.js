var score = 0;

var life = 3


function preload(){

  imagePreload()

  //bgS.autoplay(true);

  //bgS.loop()
}

function setup() {
  createCanvas(1500, 755);

  console.log("Hello!, Thanks for playing. Please don't take the code or republish this game as yours. Thank You Once Again For Playing!!!")

  mazeMap()

  playerInfoC()

  mask4C()

  lifeS()

  powerMaskC()
}

function draw() {
  background("black");

  fill("white")
  textSize(20)
  text("Score: "+ score, 750,30);
  fill("red")
  text("Life:"+ life,40,30,);

  scoreEND()

  ticMazeR()

  ticMazeR2()

  lifeEND()

  cords()

  heartEND()

  wallCo()

  posz()

  lifeG()

  mop()

  maskS()

  powerMaskA()

  devMode()

  //fullCode()

  drawSprites();
}

function heartEND(){
  
  if (life === 0){

  fill("white")
  textSize(30)
  text("OH NO... WE GOT THE VIRUS... THANKS FOR PLAYING... TO PLAY AGAIN REFRESH THE PAGE!", 100,377.5);

  player.visible = false

  mask1.visible = false

  mask2.visible = false

  mask3.visible = false

  mask4.visible = false

  powerMask1.visible = false

  powerMask2.visible = false

  powerMask3.visible = false

  nonPlayer1.visible = false

  nonPlayer2.visible = false

  outline1.visible = false

  outline2.visible = false

  outline3.visible = false

  outline4.visible = false

  wall1.visible = false

  wall2.visible = false

  wall3.visible = false

  wall4.visible = false

  wall5.visible = false

  wall6.visible = false

  wall7.visible = false

  wall8.visible = false

  wall9.visible = false

  wall10.visible = false

  wall11.visible = false

  wall12.visible = false

  wall13.visible = false

  wall14.visible = false

  wall15.visible = false

  wall16.visible = false

  wall17.visible = false

  wall18.visible = false

  wall19.visible = false

  wall20.visible = false

  wall21.visible = false

  wall22.visible = false

  wall23.visible = false

  wall24.visible = false

  wall25.visible = false

  wall26.visible = false

  wall27.visible = false

  wall28.visible = false

  wall29.visible = false

  wall30.visible = false

  wall31.visible = false

  wall32.visible = false

  wall33.visible = false

  wall34.visible = false

  wall35.visible = false

  wall36.visible = false

  wall37.visible = false

  wall38.visible = false

  }
}

function scoreEND(){

  if(score === 100){
  
  player.visible = false

  wall1.visible = false

  wall2.visible = false

  wall3.visible = false

  wall4.visible = false

  wall5.visible = false

  wall6.visible = false

  wall7.visible = false

  wall8.visible = false

  wall9.visible = false

  wall10.visible = false

  wall11.visible = false

  wall12.visible = false

  wall13.visible = false

  wall14.visible = false

  wall15.visible = false

  wall16.visible = false

  wall17.visible = false

  wall18.visible = false

  wall19.visible = false

  wall20.visible = false

  wall21.visible = false

  wall22.visible = false

  wall23.visible = false

  wall24.visible = false

  wall25.visible = false

  wall26.visible = false

  wall27.visible = false

  wall28.visible = false

  wall29.visible = false

  wall30.visible = false

  wall31.visible = false

  wall32.visible = false

  wall33.visible = false

  wall34.visible = false
   
  wall35.visible = false

  wall36.visible = false

  wall37.visible = false

  wall38.visible = false

  powerMask1.visible = false

  powerMask2.visible = false

  powerMask3.visible = false

  nonPlayer1.visible = false

  nonPlayer2.visible = false

  outline1.visible = false

  outline2.visible = false

  outline3.visible = false

  outline4.visible = false

  heart1.visible = false

  heart2.visible = false

  heart3.visible = false

  fill("white")
  textSize(20)
  text("NOW WE ARE SAFE!!!  THANKS FOR PLAYING... BE SURE TO WEAR MASK WHEN YOU GO OUTSIDE AND WASH YOUR HAND WHEN YOU COME BACK HOME!!",2,377.5)
  }
}

function maskS(){

  if(player.isTouching(mask1)){

  score = score+25

  mask1.destroy()
}

if(player.isTouching(mask2)){

  score = score+25

  mask2.destroy()
}

if(player.isTouching(mask3)){

  score = score+25

  mask3.destroy()
}

if(player.isTouching(mask4)){

  score = score+25

  mask4.destroy()
}
}



function cords(){

  text(mouseX + "," +mouseY,mouseX,mouseY);
}


function playerInfoC(){
  player = createSprite(750,500,50,50);
  player.scale = 0.4;
  player.addImage("pc1",pc1);
  

  nonPlayer1 = createSprite(750,350,50,50);
  nonPlayer1.scale = 0.4;
  nonPlayer1.addImage("npc1",npc1);

  nonPlayer2 = createSprite(750,350,50,50);
  nonPlayer2.scale = 0.2;
  nonPlayer2.addImage("npc2",npc2);
}


function mask4C(){

  mask1 = createSprite(187,80,50,50);
  mask1.scale = 0.2;
  mask1.addImage("mask",mask);

  mask2 = createSprite(1312,80,50,50);
  mask2.scale = 0.2;
  mask2.addImage("mask",mask);

  mask3 = createSprite(750,615,50,50);
  mask3.scale = 0.2;
  mask3.addImage("mask",mask);

  mask4 = createSprite(750,400,50,50);
  mask4.scale = 0.2;
  mask4.addImage("mask",mask);

}

function powerMaskC(){

  powerMask1 = createSprite(750,80,50,50);
  powerMask1.scale = 0.2;
  powerMask1.addImage("powerMask",powerMask);

  powerMask2 = createSprite(100,660,50,50);
  powerMask2.scale = 0.2;
  powerMask2.addImage("powerMask",powerMask);

  powerMask3 = createSprite(1400,660,50,50);
  powerMask3.scale = 0.2;
  powerMask3.addImage("powerMask",powerMask);

}

function lifeS(){

  heart1 = createSprite(110,25,50,50);
  heart1.scale = 0.2;
  heart1.addImage("heart",heart);

  heart2 = createSprite(150,25,50,50);
  heart2.scale = 0.2;
  heart2.addImage("heart",heart);

  heart3 = createSprite(190,25,50,50);
  heart3.scale = 0.2;
  heart3.addImage("heart",heart);
}

function wallCo(){

  //collide with maze walls

  player.collide(wall1);

  player.collide(wall2);

  player.collide(wall3);

  player.collide(wall4);

  player.collide(wall5);

  player.collide(wall6);

  player.collide(wall7);

  player.collide(wall8);

  player.collide(wall9);

  player.collide(wall10);

  player.collide(wall11);

  player.collide(wall12);

  player.collide(wall13);

  player.collide(wall14);

  player.collide(wall15);

  player.collide(wall16);

  player.collide(wall17);

  player.collide(wall18);

  player.collide(wall19);

  player.collide(wall20);

  player.collide(wall21);

  player.collide(wall22);

  player.collide(wall23);

  player.collide(wall24);

  player.collide(wall25);

  player.collide(wall26);

  player.collide(wall27);

  player.collide(wall28);

  player.collide(wall29);

  player.collide(wall30);

  player.collide(wall31);

  player.collide(wall32);

  player.collide(wall33);

  player.collide(wall34);

  player.collide(wall35);

  player.collide(wall36);

  player.collide(wall37);

  player.collide(wall38);


  nonPlayer1.collide(wall23);

  nonPlayer1.collide(wall24);

  nonPlayer1.collide(wall25);

  nonPlayer1.collide(wall26);

  nonPlayer1.collide(wall27);

  nonPlayer1.collide(wall28);

  nonPlayer1.collide(wall29);

  nonPlayer1.collide(wall30);

  nonPlayer1.collide(wall31);

  nonPlayer1.collide(wall32);

  nonPlayer1.collide(wall33);
  
  //collide with outlines

  player.collide(outline1);
  
  player.collide(outline4);
  
  player.collide(outline3);
  
  player.collide(outline2);

  nonPlayer1.collide(outline1);
  
  nonPlayer1.collide(outline4);
  
  nonPlayer1.collide(outline3);
  
  nonPlayer1.collide(outline2);

  nonPlayer2.collide(outline1);
  
  nonPlayer2.collide(outline4);
  
  nonPlayer2.collide(outline3);
  
  nonPlayer2.collide(outline2);

}



function mop(){

  player.velocityX=0;
  player.velocityY=0;
  
  
  if (keyDown(UP_ARROW)) {
    player.velocityX=0;
    player.velocityY=-10;
  }
  
  if (keyDown(DOWN_ARROW)) {
    player.velocityX = 0;
    player.velocityY = 10;
  }
  
  if (keyDown(LEFT_ARROW)) {
    player.velocityX = -10;
    player.velocityY = 0;
  }
  
  if (keyDown(RIGHT_ARROW)) {
    player.velocityX = 10;
    player.velocityY = 0;
  }
}


function imagePreload(){

  npc1 = loadImage("images/Grandpawithoutmask2.png");

  npc2 = loadImage("images/covin2.png");
 
  pc1 = loadImage("images/ManwithoutMASK2.png");
 
  pc2 = loadImage("images/ManwithMASK2.png");
 
  mask = loadImage("images/maskcmaze.png")

  powerMask = loadImage("images/powerMask.png") 

  heart = loadImage("images/heart.png")

  bgS = createAudio('sound/bgs.wav');

  dieS = createAudio('sound/die.mp3')

}


function mazeMap() {

  //outline

  outline1 = createSprite(750, 50, 1450, 5);
  outline1.shapeColor = color("blue"); 

  outline2 = createSprite(25, 395, 5, 695);
  outline2.shapeColor = color("blue");

  outline3 = createSprite(750,740, 1450, 5);
  outline3.shapeColor = color("blue");

  outline4 = createSprite(1475, 395, 5, 695);
  outline4.shapeColor = color("blue");
  
  //walls

  wall1 = createSprite(375, 100, 10, 100);
  wall1.shapeColor = color("blue");

  wall2 = createSprite(1125, 100, 10, 100);
  wall2.shapeColor = color("blue");

  wall3 = createSprite(750, 125, 610, 45);
  wall3.shapeColor = color("blue");

  wall4 = createSprite(375, 350, 10, 170);
  wall4.shapeColor = color("blue");

  wall5 = createSprite(1125, 350, 10, 170);
  wall5.shapeColor = color("blue");

  wall6 = createSprite(187.5, 125, 199, 45)
  wall6.shapeColor = color("blue");

  wall7 = createSprite(1312.5, 125, 199, 45);
  wall7.shapeColor = color("blue");

  wall8 = createSprite(281.25, 350, 10, 45);
  wall8.shapeColor = color("blue");

  wall9 = createSprite(1218.75,350, 10, 45);
  wall9.shapeColor = color("blue");

  wall10 = createSprite(187.5,365,10,145);
  wall10.shapeColor = color("blue");

  wall11 = createSprite(234.375,440,105,10);
  wall11.shapeColor = color("blue");

  wall12 = createSprite(1312.5,365,10,145);
  wall12.shapeColor = color("blue");

  wall13 = createSprite(1265,440,105,10);
  wall13.shapeColor = color("blue");

  wall14 = createSprite(735,575,980,10);
  wall14.shapeColor = color("blue");

  wall15 = createSprite(50,575,45,10);
  wall15.shapeColor = color("blue");

  wall16 = createSprite(150,575,45,10);
  wall16.shapeColor = color("blue");

  wall17 = createSprite(175,600, 10, 60);
  wall17.shapeColor = color("blue");

  wall18 = createSprite(175,710,10, 60);
  wall18.shapeColor = color("blue");

  wall19 = createSprite(1315,710, 10, 60);
  wall19.shapeColor = color("blue");

  wall20 = createSprite(1315,600, 10, 60);
  wall20.shapeColor = color("blue");

  wall21 = createSprite(1335,575,45,10);
  wall21.shapeColor = color("blue");

  wall22 = createSprite(1450,575,45,10);
  wall22.shapeColor = color("blue");

  wall23 = createSprite(1220,605, 10, 60);
  wall23.shapeColor = color("blue");//

  wall24 = createSprite(250,605, 10, 60);
  wall24.shapeColor = color("blue");
  
  wall25 = createSprite(360,700,10,80);
  wall25.shapeColor = color("blue");

  wall26 = createSprite(455,610, 10,80);
  wall26.shapeColor = color("blue");

  wall27 = createSprite(560,700,10,80);
  wall27.shapeColor = color("blue");

  wall28 = createSprite(660,610,10,80);
  wall28.shapeColor = color("blue");

  wall29 = createSprite(750,700,10,80);
  wall29.shapeColor = color("blue");

  wall30 = createSprite(850,610,10,80);
  wall30.shapeColor = color("blue");

  wall31 = createSprite(1125,700,10,80);
  wall31.shapeColor = color("blue");

  wall32 = createSprite(945,700,10,80);
  wall32.shapeColor = color("blue");

  wall33 = createSprite(1030,610,10,80);
  wall33.shapeColor = color("blue");

  wall34 = createSprite(750,430,300,10);
  wall34.shapeColor = color("blue");

  wall35 = createSprite(605,360,10,145);
  wall35.shapeColor = color("blue");

  wall36 = createSprite(895,360,10,145);
  wall36.shapeColor = color("blue");

  wall37 = createSprite(645,290,90,10);
  wall37.shapeColor = color("blue");

  wall38 = createSprite(855,290,90,10);
  wall38.shapeColor = color("blue");
}

function devMode(){

  player.velocityX=0;
  player.velocityY=0;
  
  
  if (keyDown(UP_ARROW)) {
    player.velocityX=0;
    player.velocityY=-25;
  }
  
  if (keyDown(DOWN_ARROW)) {
    player.velocityX = 0;
    player.velocityY = 25;
  }
  
  if (keyDown(LEFT_ARROW)) {
    player.velocityX = -25;
    player.velocityY = 0;
  }
  
  if (keyDown(RIGHT_ARROW)) {
    player.velocityX = 25;
    player.velocityY = 0;
  }

}



function powerMaskA(){

 if (player.collide(powerMask1)){


  powerMask1.destroy()

  nonPlayer1.x = 750;

  nonPlayer1.y = 350;

  nonPlayer2.x = 750

  nonPlayer2.y = 350

  if(nonPlayer1.x === 750){


    nonPlayer1.velocityX=0;
    nonPlayer1.velocityY=-10;
  
  }
  
  if(nonPlayer2.x === 750){
  
    nonPlayer2.velocityX=0;
    nonPlayer2.velocityY=-10;
  
  
  }

 }

 if (player.collide(powerMask2)){
  powerMask2.destroy()

  nonPlayer1.x = 750;

  nonPlayer1.y = 350;

  nonPlayer2.x = 750

  nonPlayer2.y = 350

  if(nonPlayer1.x === 750){


    nonPlayer1.velocityX=0;
    nonPlayer1.velocityY=-10;
  
  }
  
  if(nonPlayer2.x === 750){
  
    nonPlayer2.velocityX=0;
    nonPlayer2.velocityY=-10;
  
  
  }

 }

 if (player.collide(powerMask3)){

  powerMask3.destroy()

  nonPlayer1.x = 750;

  nonPlayer1.y = 350;

  nonPlayer2.x = 750

  nonPlayer2.y = 350

  if(nonPlayer1.x === 750){


    nonPlayer1.velocityX=0;
    nonPlayer1.velocityY=-10;
  
  }
  
  if(nonPlayer2.x === 750){
  
    nonPlayer2.velocityX=0;
    nonPlayer2.velocityY=-10;
  
  
  }

 }

}

function lifeG(){

  if(nonPlayer1.isTouching(player)){

    life = life -1

    player.x = 750

    player.y = 500

    nonPlayer1.x = 750;

  nonPlayer1.y = 350;

  nonPlayer2.x = 750

  nonPlayer2.y = 350

  if(nonPlayer1.x === 750){


    nonPlayer1.velocityX=0;
    nonPlayer1.velocityY=-10;
  
  }
  
  if(nonPlayer2.x === 750){
  
    nonPlayer2.velocityX=0;
    nonPlayer2.velocityY=-10;
  
  
  }

  dieS.autoplay(true);

  }

 else if(nonPlayer2.isTouching(player)){

  life = life -1

  player.x = 750

  player.y = 500

  
  nonPlayer1.x = 750;

  nonPlayer1.y = 350;

  nonPlayer2.x = 750

  nonPlayer2.y = 350

  if(nonPlayer1.x === 750){


    nonPlayer1.velocityX=0;
    nonPlayer1.velocityY=-10;
  
  }
  
  if(nonPlayer2.x === 750){
  
    nonPlayer2.velocityX=0;
    nonPlayer2.velocityY=-10;
  
  
  }

  dieS.autoplay(true);
 }

}

function lifeEND(){

 if(life === 2){

  heart3.visible = false

 }

 if(life === 1){

  heart2.visible = false
  
 }

 if(life === 0){

  heart1.visible = false
  
 }
}
function ticMazeR(){

  if(nonPlayer1.x === 750){


    nonPlayer1.velocityX=0;
    nonPlayer1.velocityY=-10;
  
  }
  
  if(nonPlayer2.x === 750){
  
    nonPlayer2.velocityX=0;
    nonPlayer2.velocityY=-10;
  
  
  }



  if(nonPlayer1.y === 210){


    nonPlayer1.velocityX=10;
    nonPlayer1.velocityY=0
  
  }
  
  if(nonPlayer2.y === 210){
  
    nonPlayer2.velocityX=-10;
    nonPlayer2.velocityY=0;
  }

}

function ticMazeR2(){

  if(nonPlayer1.x === 1400){


    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = 10;
  
  }
  
  if(nonPlayer2.x === 100){
  
    nonPlayer2.velocityX=0;
    nonPlayer2.velocityY=10;
  
  
  }
}

//UP
// player.velocityX=0;
// player.velocityY=-10;
//
//
//DOWN
// player.velocityX = 0;
// player.velocityY = 10;
//
//
//LEFT
// player.velocityX = -10;
// player.velocityY = 0;
//
//
//RIGHT
// player.velocityX = 10;
// player.velocityY = 0;

function posz(){

  poz1 = createSprite(1400,540,10,10);

  if(nonPlayer1.isTouching(poz1)){

    nonPlayer1.velocityX = -10;
    nonPlayer1.velocityY = 0;
  }

  if(nonPlayer2.isTouching(poz1)){

    nonPlayer2.velocityX = 0;
    nonPlayer2.velocityY = -10;
  }

  poz2 = createSprite(100,540,10,10);

  if(nonPlayer2.isTouching(poz2)){

    nonPlayer2.velocityX = 10;
    nonPlayer2.velocityY = 0;

  }

  if(nonPlayer1.isTouching(poz2)){

    nonPlayer1.velocityX =0;
    nonPlayer1.velocityY =-10;

  }

  poz3 = createSprite(1250,510,10,10);

  if(nonPlayer1.isTouching(poz3)){

    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = 10;
  }

  poz4 = createSprite(1250,725,10,10);

  if(nonPlayer1.isTouching(poz4)){

    nonPlayer1.velocityX = -10;
    nonPlayer1.velocityY = 0;
  }

  poz5 = createSprite(1145,725,10,10);

  if(nonPlayer1.isTouching(poz5)){

    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = -10;
  }

  poz6 = createSprite(1170,580,10,10);

  if(nonPlayer1.isTouching(poz6)){

    nonPlayer1.velocityX = -10;
    nonPlayer1.velocityY = 0;
  }

  poz7 = createSprite(1035,580,10,10);

  if(nonPlayer1.isTouching(poz7)){

    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = 10;
  }

  pos8 = createSprite(1035,740,10,10);

  if(nonPlayer1.isTouching(pos8)){

    nonPlayer1.velocityX = -10;
    nonPlayer1.velocityY = 0;
  }

  pos9 = createSprite(950,740,10,10);

  if(nonPlayer1.isTouching(pos9)){

    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = -10;
  }

  pos10 = createSprite(950,580,10,10);

  if(nonPlayer1.isTouching(pos10)){

    nonPlayer1.velocityX = -10;
    nonPlayer1.velocityY = 0;
  }

  pos11 = createSprite(860,580,10,10);

  if(nonPlayer1.isTouching(pos11)){

    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = 10;
  }

  pos12 = createSprite(860,740,10,10);

  if(nonPlayer1.isTouching(pos12)){

    nonPlayer1.velocityX = -10;
    nonPlayer1.velocityY = 0;
  }

  pos13 = createSprite(755,740,10,10);

  if(nonPlayer1.isTouching(pos13)){

    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = -10;
  }

  pos14 = createSprite(755,580,10,10);

  if(nonPlayer1.isTouching(pos14)){

    nonPlayer1.velocityX = -10;
    nonPlayer1.velocityY = 0;
  }

  pos15 = createSprite(670,580,10,10);

  if(nonPlayer1.isTouching(pos15)){

    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = 10;
  }


  pos16 = createSprite(670,740,10,10);

  if(nonPlayer1.isTouching(pos16)){

    nonPlayer1.velocityX = -10;
    nonPlayer1.velocityY = 0;
  }

  pos17 = createSprite(570,740,10,10);

  if(nonPlayer1.isTouching(pos17)){

    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = -10;
  }

  pos18 = createSprite(570,580,10,10)

  if(nonPlayer1.isTouching(pos18)){

    nonPlayer1.velocityX = -10;
    nonPlayer1.velocityY = 0;
  }

  pos19 = createSprite(460,740,10,10)

  if(nonPlayer1.isTouching(pos19)){

    nonPlayer1.velocityX = -10;
    nonPlayer1.velocityY = 0;
  }

  pos20 = createSprite(460,580,10,10)

  if(nonPlayer1.isTouching(pos20)){

    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = 10;
  }

  pos21 = createSprite(370,740,10,10)

  if(nonPlayer1.isTouching(pos21)){

    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = -10;
  }

  pos22 = createSprite(370,580,10,10)

  if(nonPlayer1.isTouching(pos22)){

    nonPlayer1.velocityX = -10;
    nonPlayer1.velocityY = 0;
  }

  pos23 = createSprite(260,580,10,10)

  if(nonPlayer1.isTouching(pos23)){

    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = 10;
  }

  pos24 = createSprite(260,740,10,10)

  if(nonPlayer1.isTouching(pos24)){

    nonPlayer1.velocityX = -10;
    nonPlayer1.velocityY = 0;
  }

  pos25 = createSprite(185,740,10,10)

  if(nonPlayer1.isTouching(pos25)){

    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = -10;
  }

  pos26 = createSprite(190,480,10,10)

  if(nonPlayer1.isTouching(pos26)){

    nonPlayer1.velocityX =-10;
    nonPlayer1.velocityY = 0;
  }

  pos27 = createSprite(115,165,10,10)

  if(nonPlayer1.isTouching(pos27)){

    nonPlayer1.velocityX =10;
    nonPlayer1.velocityY = 0;
  }

  pos28 = createSprite(1400,165,10,10)

  if(nonPlayer1.isTouching(pos28)){

    nonPlayer1.velocityX = 0;
    nonPlayer1.velocityY = 10;
  }

  pos29 = createSprite(750,500,10,10)

  if(nonPlayer2.isTouching(pos29)){

    nonPlayer2.velocityX =10;
    nonPlayer2.velocityY = 0;
  
  }

  pos30 = createSprite(1045,180,10,10)

  if(nonPlayer1.isTouching(pos30)){

    pos30.x = 1000

    pos30.y = 1000

    pos30.destroy();

    nonPlayer1.velocityX = 0;

    nonPlayer1.velocityY = 10;


  }

  pos31 = createSprite(1045,550,10,10)

  if(nonPlayer1.isTouching(pos31)){

    pos31.x = 1000

    pos31.y = 1000

    pos31.destroy();

    nonPlayer1.velocityX = -10;

    nonPlayer1.velocityY = 0;


  }

  pos32 = createSprite(751,550,10,10)

  if(nonPlayer1.isTouching(pos32)){
    
    pos32.x = 1000

    pos32.y = 1000

    pos32.destroy();

    nonPlayer1.velocityX = -10;

    nonPlayer1.velocityY = 0;


  }

 poz1.visible = false

 poz2.visible = false

 poz3.visible = false

 poz4.visible = false

 poz5.visible = false

 poz6.visible = false

 poz7.visible = false

 pos8.visible = false

 pos9.visible = false

 pos10.visible = false

 pos11.visible = false

 pos12.visible = false

 pos13.visible = false

 pos14.visible = false

 pos15.visible = false

 pos16.visible = false

 pos17.visible = false

 pos18.visible = false

 pos19.visible = false

 pos20.visible = false

 pos21.visible = false

 pos22.visible = false

 pos23.visible = false

 pos24.visible = false

 pos25.visible = false

 pos26.visible = false

 pos27.visible = false

 pos28.visible = false

 pos29.visible = false

 pos30.visible = false

 pos31.visible = false

 pos32.visible = false
}
