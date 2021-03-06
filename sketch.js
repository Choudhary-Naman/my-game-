const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImage,log,logImage,standingImage;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,
block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,
block23,block24,block25,block26,block27,block28,block29,block30,block31,block32,block33,block34
,block35,block36,block37,block38,block39,block40,block41,block42,block43,block43,block44,block45,block46,
block47,block48,block49,block50,block51,block52,block53,block54,block55,block56,block57,block58,block59,block60,
block61,block62,block63,block64,block65,block66,block67,block68,block69,block70,block71,block72,block73,block74,block75,
block76,block77,block78,block79,block80,block81,block82;

var boxImage,treasureImage,treasure;
var treasureKey,keyImage,life,lifeImage,coinImage,coin,speedImage,speed,bombImage,bomb;
var coinCollect,explosion,lifeGone,loose,powerUp,win,backgroundMusic,balloonImage,boy,boyImage1,boyImage2,boyImage3,boyImage4;
var enemy,enemy1,enemyImage,enemyImage1;
var life,life1,life2;
var blocks;
var gameState="play" 

function preload() {
   logImage = loadImage("Images/wood2.png");
   standingImage = loadImage("Images/standingLog.png");
   boxImage = loadImage("Images/wood1.png");
   backgroundImage = loadImage("Images/bg.png");
   treasureImage=loadImage("Images/treasures.png");
   keyImage=loadImage("Images/key.png");
   lifeImage=loadImage("Images/life.png");
   boyImage1=loadImage("Images/f.gif");
   boyImage2=loadImage("Images/b.gif");
   boyImage3=loadImage("Images/lr.gif");
   boyImage4=loadImage("Images/s.png");
   speedImage=loadImage("Images/speed.png");
   bombImage=loadImage("Images/bombs.png");
   keyImage=loadImage("Images/key.png");
   enemyImage=loadImage("Images/ene.png");
   enemyImage1=loadImage("Images/ene1.png")
  

   coinCollect=loadSound("Sounds/coinCollect.mp3");
   explosion=loadSound("Sounds/explosion.mp3");
   lifeGone=loadSound("Sounds/lifeGone.wav");
   loose=loadSound("Sounds/loose.wav");
   powerUp=loadSound("Sounds/powerUp.mp3");
   win=loadSound("Sounds/win.wav");
   backgroundMusic=loadSound("Sounds/backgroundMusic.mp3",true);
}

function setup(){
    var canvas = createCanvas(1300,610);
    engine = Engine.create();
    world = engine.world;

    //backgroundMusic.play();

    block23 = createSprite(650,305,10,70);
    block23.addImage(logImage);
    block23.scale= 0.5;
    block24 = createSprite(650,396,10,70);
    block24.addImage(logImage);
    block24.scale= 0.5;
    block25 = createSprite(595,350,70,10);
    block25.addImage(standingImage);
    block25.scale= 0.5;
    block26 = createSprite(700,350,10,70);
    block26.addImage(standingImage);
    block26.scale= 0.5;

    treasure=createSprite(650,350);
    treasure.addImage(treasureImage);
    treasure.scale= 0.1;

     block1= createSprite(555,350,100,10);
     block1.addImage(standingImage);
     block1.scale= 0.5;
     block2= createSprite(510,304,10,97);
     block2.addImage(logImage);
     block2.scale= 0.5;
     block3= createSprite(725,305,100,10);
     block3.addImage(standingImage);
     block3.scale= 0.5;
     block4= createSprite(725,406,100,10);
     block4.addImage(standingImage);
     block4.scale= 0.5;
     block5=createSprite(670,452,10,100);
     block5.addImage(logImage);
     block5.scale= 0.5;
     block6=createSprite(460,450,100,10);
     block6.addImage(standingImage);
     block6.scale= 0.5;
     block7=createSprite(460,350,170,10);
     block7.addImage(standingImage);
     block7.scale= 0.5;
     block8=createSprite(360,395,100,10);
     block8.addImage(standingImage);
     block8.scale= 0.5;
     block9=createSprite(460,400,10,100);
     block9.addImage(logImage);
     block9.scale= 0.5;
     block10=createSprite(360,400,10,100);
     block10.addImage(logImage);
     block10.scale= 0.5;
     block11=createSprite(324,200,10,100);
     block11.addImage(logImage);
     block11.scale= 0.5;
     block12=createSprite(623,200,10,100);
     block12.addImage(logImage);
     block12.scale= 0.5;
     block13=createSprite(360,300,100,10);
     block13.addImage(standingImage);
     block13.scale= 0.5;
     block14=createSprite(809,200,10,100);
     block14.addImage(logImage);
     block14.scale= 0.5;
     block15=createSprite(390,300,50,10);
     block15.addImage(standingImage);
     block15.scale= 0.5;
     block16=createSprite(180,255,100,10);
     block16.addImage(standingImage);
     block16.scale= 0.5;
     block17=createSprite(224,200,10,180);
     block17.addImage(logImage);
     block17.scale= 0.5;
     block18=createSprite(340,300,10,130);
     block18.addImage(logImage);
     block18.scale= 0.5;
     block19=createSprite(523,200,10,100);
     block19.addImage(logImage);
     block19.scale= 0.5;
     block20=createSprite(180,356,50,10);
     block20.addImage(standingImage);
     block20.scale= 0.5;
     block21=createSprite(425,200,10,100);
     block21.addImage(logImage);
     block21.scale= 0.5;
     block22=createSprite(710,200,10,100);
     block22.addImage(logImage);
     block22.scale= 0.5;
     block27=createSprite(810,200,10,100);
     block27.addImage(logImage);
     block27.scale= 0.5;
     block28=createSprite(910,200,10,100);
     block28.addImage(logImage);
     block28.scale= 0.5;
     block29=createSprite(1010,200,10,100);
     block29.addImage(logImage);
     block29.scale= 0.5;
     block30=createSprite(1110,200,10,100);
     block30.addImage(logImage);
     block30.scale= 0.5;
     block31=createSprite(1160,246,100,10);
     block31.addImage(standingImage);
     block31.scale= 0.5;
     block32=createSprite(1160,346,50,10);
     block32.addImage(standingImage);
     block32.scale= 0.5;
     block33=createSprite(1160,546,50,10);
     block33.addImage(standingImage);
     block33.scale= 0.5;
     block34=createSprite(180,457,50,10);
     block34.addImage(standingImage);
     block34.scale= 0.5;
     block35=createSprite(180,557,50,10);
     block35.addImage(standingImage);
     block35.scale= 0.5;
     block36=createSprite(1115,600,10,100);
     block36.addImage(logImage);
     block36.scale= 0.5;
     block37=createSprite(1015,600,10,100);
     block37.addImage(logImage);
     block37.scale= 0.5;
     block38=createSprite(915,600,10,100);
     block38.addImage(logImage);
     block38.scale= 0.5;
     block39=createSprite(815,600,10,100);
     block39.addImage(logImage);
     block39.scale= 0.5;
     block40=createSprite(715,600,10,100);
     block40.addImage(logImage);
     block40.scale= 0.5;
     block41=createSprite(615,600,10,100);
     block41.addImage(logImage);
     block41.scale= 0.5;
     block42=createSprite(515,600,10,100);
     block42.addImage(logImage);
     block42.scale= 0.5;
     block43=createSprite(415,600,10,100);
     block43.addImage(logImage);
     block43.scale= 0.5;
     block44=createSprite(315,600,10,100);
     block44.addImage(logImage);
     block44.scale= 0.5;
     block45=createSprite(215,600,10,100);
     block45.addImage(logImage);
     block45.scale= 0.5;
     block46=createSprite(543,340,10,100);
     block46.addImage(logImage);
     block46.scale= 0.5;
     block47=createSprite(615,497,10,100);
     block47.addImage(standingImage);
     block47.scale= 0.5;
     block48=createSprite(700,497,10,100);
     block48.addImage(logImage);
     block48.scale= 0.5;
    //  block49=createSprite(660,519,10,100);
    //  block49.addImage(standingImage);
    //  block49.scale= 0.5;
     block50=createSprite(1000,497,10,100);
     block50.addImage(standingImage);
     block50.scale= 0.5;
     block51=createSprite(965,497,10,100);
     block51.addImage(logImage);
     block51.scale= 0.5;
     block52=createSprite(965,554,10,100);
     block52.addImage(standingImage);
     block52.scale= 0.5;
     block53=createSprite(1105,497,10,100);
     block53.addImage(standingImage);
     block53.scale= 0.5;
     block54=createSprite(1105,552,10,100);
     block54.addImage(logImage);
     block54.scale= 0.5;
     block55=createSprite(1000,400,10,100);
     block55.addImage(logImage);
     block55.scale= 0.5;
     block56=createSprite(1050,450,10,100);
     block56.addImage(standingImage);
     block56.scale= 0.5;
     block57=createSprite(1050,255,10,100);
     block57.addImage(standingImage);
     block57.scale= 0.5;
     block58=createSprite(1050,290,10,100);
     block58.addImage(logImage);
     block58.scale= 0.5;
     block59=createSprite(500,255,10,100);
     block59.addImage(standingImage);
     block59.scale= 0.5;
     block60=createSprite(245,255,10,100);
     block60.addImage(standingImage);
     block60.scale= 0.5;
     block61=createSprite(245,350,10,100);
     block61.addImage(logImage);
     block61.scale= 0.5;
     block62=createSprite(245,400,10,100);
     block62.addImage(standingImage);
     block62.scale= 0.5;
     block63=createSprite(220,430,10,100);
     block63.addImage(logImage);
     block63.scale= 0.5;
     block64=createSprite(290,500,10,100);
     block64.addImage(logImage);
     block64.scale= 0.5;
     block65=createSprite(285,550,10,100);
     block65.addImage(standingImage);
     block65.scale= 0.5;
     block66=createSprite(420,500,10,100);
     block66.addImage(standingImage);
     block66.scale= 0.5;
     block67=createSprite(420,550,10,100);
     block67.addImage(logImage);
     block67.scale= 0.5;
     block68=createSprite(550,450,10,100);
     block68.addImage(logImage);
     block68.scale= 0.5;
     block69=createSprite(500,500,10,100);
     block69.addImage(logImage);
     block69.scale= 0.5;
    //  block70=createSprite(690,250,10,100);
    //  block70.addImage(standingImage);
    //  block70.scale= 0.5;
     block71=createSprite(800,540,10,100);
     block71.addImage(logImage);
     block71.scale= 0.5;
     block72=createSprite(840,450,10,100);
     block72.addImage(logImage);
     block72.scale= 0.5;
     block73=createSprite(840,350,10,100);
     block73.addImage(standingImage);
     block73.scale= 0.5;
     block74=createSprite(890,350,10,100);
     block74.addImage(logImage);
     block74.scale= 0.5;
     block75=createSprite(770,250,10,100);
     block75.addImage(logImage);
     block75.scale= 0.5;
     block76=createSprite(770,350,10,100);
     block76.addImage(logImage);
     block76.scale= 0.5;
     block77=createSprite(940,250,10,100);
     block77.addImage(standingImage);
     block77.scale= 0.5;
     block78=createSprite(790,460,10,100);
     block78.addImage(standingImage);
     block78.scale= 0.5;
     block79=createSprite(890,400,10,100);
     block79.addImage(standingImage);
     block79.scale= 0.5;
     block80=createSprite(990,300,10,100);
     block80.addImage(standingImage);
     block80.scale= 0.5;
     block81=createSprite(1060,350,10,100);
     block81.addImage(logImage);
     block81.scale= 0.5;
     block82=createSprite(860,480,10,100);
     block82.addImage(standingImage);
     block82.scale= 0.5;
     block83=createSprite(1160,446,50,10);
     block83.addImage(standingImage);
     block83.scale= 0.5;

    treasureKey = createSprite(1070,240);
    treasureKey.addImage("key for the treasure",keyImage);
    treasureKey.scale=0.06

    enemy= createSprite(650,418);
    enemy.addImage("key for the treasure",enemyImage);
    enemy.scale=0.08
    enemy.velocityX=+4
    enemy.velocityY=-4
    

    enemy1= createSprite(1070,340);
    enemy1.addImage("key for the treasure",enemyImage1);
    enemy1.scale=0.09
    enemy1.velocityX=+4
    enemy.velocityY=-4

   boy=createSprite(210,230,10,100);
   boy.addImage("running boy",boyImage4);
   boy.tint="red"
   boy.scale=0.8
   
   life=createSprite(25,25,20,20);
   life.addImage("image of life",lifeImage);
   life.scale=0.1

   life1=createSprite(80,25,20,20);
   life1.addImage("image of life",lifeImage);
   life1.scale=0.1

   life2=createSprite(135,25,20,20);
   life2.addImage("image of life",lifeImage);
   life2.scale=0.1

   blocks=createGroup();
   blocks.add(block1); blocks.add(block2); blocks.add(block3); blocks.add(block4); blocks.add(block5);
   blocks.add(block6);blocks.add(block7);blocks.add(block8);blocks.add(block9);blocks.add(block10);
   blocks.add(block11);blocks.add(block12);
   blocks.add(block13); blocks.add(block14); blocks.add(block15); blocks.add(block16); blocks.add(block17);
   blocks.add(block18); blocks.add(block19); blocks.add(block20); blocks.add(block21); blocks.add(block26);
   blocks.add(block22); blocks.add(block23); blocks.add(block24); blocks.add(block25); blocks.add(block27);
   blocks.add(block28); blocks.add(block29); blocks.add(block30); blocks.add(block31); blocks.add(block32);
   blocks.add(block33); blocks.add(block34); blocks.add(block35); blocks.add(block36); blocks.add(block37);
   blocks.add(block38); blocks.add(block39); blocks.add(block40); blocks.add(block41); blocks.add(block42);
   blocks.add(block43); blocks.add(block44); blocks.add(block45); blocks.add(block46); blocks.add(block47);
   blocks.add(block48); blocks.add(block50); blocks.add(block51); blocks.add(block52);
   blocks.add(block53); blocks.add(block54); blocks.add(block55); blocks.add(block56); blocks.add(block57);
   blocks.add(block58); blocks.add(block59); blocks.add(block60); blocks.add(block61); blocks.add(block62);
   blocks.add(block63); blocks.add(block64); blocks.add(block65); blocks.add(block66); blocks.add(block67);
   blocks.add(block68);blocks.add(block69);blocks.add(block72);blocks.add(block71);
   blocks.add(block73);blocks.add(block74);blocks.add(block75);blocks.add(block76);blocks.add(block77);
   blocks.add(block78);blocks.add(block79);blocks.add(block80);blocks.add(block81);blocks.add(block82);blocks.add(block83);

 }

function draw(){
    background(backgroundImage);
    Engine.update(engine);

    if(keyDown(UP_ARROW)){
        boy.y=boy.y-4
    }
    if(keyDown(DOWN_ARROW)){
        boy.y=boy.y+4
    }
    if(keyDown(LEFT_ARROW)){
        boy.x=boy.x-4
    }
    if(keyDown(RIGHT_ARROW)){
        boy.x=boy.x+4
    }
    if(boy.isTouching(treasureKey)){
        treasureKey.destroy();
        gameState = "collectKey";
            
        
    }

//     direction(); 

// function direction(){
// //     if(enemy.isTouching(blocks)){
// //  enemy.velocityX=-4 ||  enemy.velocityX=+4 || enemy.velocityY=+4 || enemy.velocityY=-4
// //     }



// enemy.setVelocity(-4,+4);
//  enemy1.velocityX=-4 
//  if(enemy.isTouching(blocks)){
//       enemy.velocityY=-4;
//      } else{
//           enemy.velocityX=+4 
//         }
         
// enemy.velocityX=-4
// enemy1.velocityX=-4
//  if(enemy.isTouching(blocks)){
//     enemy.velocityY=+4;
//  }else{
//     enemy.velocityX=+4  
//  }
 
//  if(enemy1.isTouching(blocks)){   
//     enemy1.velocityX=-4;
//  }
// else if(enemy.isTouching(blocks)){
//     enemy.velocityX=+4
// }
// else if(enemy.isTouching(blocks)){
//     enemy.velocityY=+4
// }
// else{
//     enemy.velocityY=-4
//     enemy1.velocityY=-4

  

boy.collide(blocks);
enemy.bounceOff(blocks);
enemy1.bounceOff(blocks);
//  boy.collide(block1);
//  boy.collide(block2);
//  boy.collide(block3);
//  boy.collide(block4);
//  boy.collide(block5);
//  boy.collide(block6);
//  boy.collide(block7);
//  boy.collide(block8);
//  boy.collide(block9);
//  boy.collide(block10);
//  boy.collide(block11);
//  boy.collide(block12);
//  boy.collide(block13);
//  boy.collide(block14);
//  boy.collide(block15);
//  boy.collide(block16);
//  boy.collide(block17);
//  boy.collide(block18);
//  boy.collide(block19);
//  boy.collide(block20);
//  boy.collide(block21);
//  boy.collide(block22);
//  boy.collide(block23);
//  boy.collide(block24);
//  boy.collide(block25);
//  boy.collide(block26);
//  boy.collide(block27);
//  boy.collide(block28);
//  boy.collide(block29);
//  boy.collide(block30);
//  boy.collide(block31);
//  boy.collide(block32);
//  boy.collide(block33);
//  boy.collide(block34);
//  boy.collide(block35);
//  boy.collide(block36);
//  boy.collide(block37);
//  boy.collide(block38);
//  boy.collide(block39);
//  boy.collide(block40);
//  boy.collide(block41);
//  boy.collide(block42);
//  boy.collide(block43);
//  boy.collide(block44);
//  boy.collide(block45);
//  boy.collide(block46);
//  boy.collide(block47);
//  boy.collide(block48);
//  //boy.collide(block49);
//  boy.collide(block50);
//  boy.collide(block51);
//  boy.collide(block52);
//  boy.collide(block53);
//  boy.collide(block54);
//  boy.collide(block55);
//  boy.collide(block56);
//  boy.collide(block57);
//  boy.collide(block58);
//  boy.collide(block59);
//  boy.collide(block60);
//  boy.collide(block61);
//  boy.collide(block62);
//  boy.collide(block63);
//  boy.collide(block64);
//  boy.collide(block65);
//  boy.collide(block66);
//  boy.collide(block67);
//  boy.collide(block68);
//  boy.collide(block69);
//  boy.collide(block70);
//  boy.collide(block71);
//  boy.collide(block72);
//  boy.collide(block73);
//  boy.collide(block74);
//  boy.collide(block75);
//  boy.collide(block76);
//  boy.collide(block77);
//  boy.collide(block78);
//  boy.collide(block79);
//  boy.collide(block80);
//  boy.collide(block81);
//  boy.collide(block82);

//  enemy.collide(block1);
//  enemy.collide(block2);
//  enemy.collide(block3);
//  enemy.collide(block4);
//  enemy.collide(block5);
//  enemy.collide(block6);
//  enemy.collide(block7);
//  enemy.collide(block8);
//  enemy.collide(block9);
//  enemy.collide(block10);
//  enemy.collide(block11);
//  enemy.collide(block12);
//  enemy.collide(block13);
//  enemy.collide(block14);
//  enemy.collide(block15);
//  enemy.collide(block16);
//  enemy.collide(block17);
//  enemy.collide(block18);
//  enemy.collide(block19);
//  enemy.collide(block20);
//  enemy.collide(block21);
//  enemy.collide(block22);
//  enemy.collide(block23);
//  enemy.collide(block24);
//  enemy.collide(block25);
//  enemy.collide(block26);
//  enemy.collide(block27);
//  enemy.collide(block28);
//  enemy.collide(block29);
//  enemy.collide(block30);
//  enemy.collide(block31);
//  enemy.collide(block32);
//  enemy.collide(block33);
//  enemy.collide(block34);
//  enemy.collide(block35);
//  enemy.collide(block36);
//  enemy.collide(block37);
//  enemy.collide(block38);
//  enemy.collide(block39);
//  enemy.collide(block40);
//  enemy.collide(block41);
//  enemy.collide(block42);
//  enemy.collide(block43);
//  enemy.collide(block44);
//  enemy.collide(block45);
//  enemy.collide(block46);
//  enemy.collide(block47);
//  enemy.collide(block48);
//  enemy.collide(block50);
//  enemy.collide(block51);
//  enemy.collide(block52);
//  enemy.collide(block53);
//  enemy.collide(block54);
//  enemy.collide(block55);
//  enemy.collide(block56);
//  enemy.collide(block57);
//  enemy.collide(block58);
//  enemy.collide(block59);
//  enemy.collide(block60);
//  enemy.collide(block61);
//  enemy.collide(block62);
//  enemy.collide(block63);
//  enemy.collide(block64);
//  enemy.collide(block65);
//  enemy.collide(block66);
//  enemy.collide(block67);
//  enemy.collide(block68);
//  enemy.collide(block69);
//  enemy.collide(block71);
//  enemy.collide(block72);
//  enemy.collide(block73);
//  enemy.collide(block74);
//  enemy.collide(block75);
//  enemy.collide(block76);
//  enemy.collide(block77);
//  enemy.collide(block78);
//  enemy.collide(block79);
//  enemy.collide(block80);
//  enemy.collide(block81);
//  enemy.collide(block82);

//  enemy1.collide(block1);
//  enemy1.collide(block2);
//  enemy1.collide(block3);
//  enemy1.collide(block4);
//  enemy1.collide(block5);
//  enemy1.collide(block6);
//  enemy1.collide(block7);
//  enemy1.collide(block8);
//  enemy1.collide(block9);
//  enemy1.collide(block10);
//  enemy1.collide(block11);
//  enemy1.collide(block12);
//  enemy1.collide(block13);
//  enemy1.collide(block14);
//  enemy1.collide(block15);
//  enemy1.collide(block16);
//  enemy1.collide(block17);
//  enemy1.collide(block18);
//  enemy1.collide(block19);
//  enemy1.collide(block20);
//  enemy1.collide(block21);
//  enemy1.collide(block22);
//  enemy1.collide(block23);
//  enemy1.collide(block24);
//  enemy1.collide(block25);
//  enemy1.collide(block26);
//  enemy1.collide(block27);
//  enemy1.collide(block28);
//  enemy1.collide(block29);
//  enemy1.collide(block30);
//  enemy1.collide(block31);
//  enemy1.collide(block32);
//  enemy1.collide(block33);
//  enemy1.collide(block34);
//  enemy1.collide(block35);
//  enemy1.collide(block36);
//  enemy1.collide(block37);
//  enemy1.collide(block38);
//  enemy1.collide(block39);
//  enemy1.collide(block40);
//  enemy1.collide(block41);
//  enemy1.collide(block42);
//  enemy1.collide(block43);
//  enemy1.collide(block44);
//  enemy1.collide(block45);
//  enemy1.collide(block46);
//  enemy1.collide(block47);
//  enemy1.collide(block48);
//  enemy1.collide(block50);
//  enemy1.collide(block51);
//  enemy1.collide(block52);
//  enemy1.collide(block53);
//  enemy1.collide(block54);
//  enemy1.collide(block55);
//  enemy1.collide(block56);
//  enemy1.collide(block57);
//  enemy1.collide(block58);
//  enemy1.collide(block59);
//  enemy1.collide(block60);
//  enemy1.collide(block61);
//  enemy1.collide(block62);
//  enemy1.collide(block63);
//  enemy1.collide(block64);
//  enemy1.collide(block65);
//  enemy1.collide(block66);
//  enemy1.collide(block67);
//  enemy1.collide(block68);
//  enemy1.collide(block69);
//  enemy1.collide(block71);
//  enemy1.collide(block72);
//  enemy1.collide(block73);
//  enemy1.collide(block74);
//  enemy1.collide(block75);
//  enemy1.collide(block76);
//  enemy1.collide(block77);
//  enemy1.collide(block78);
//  enemy1.collide(block79);
//  enemy1.collide(block80);
//  enemy1.collide(block81);
//  enemy1.collide(block82);

drawSprites();
}

function play(){
    textSize(50);
    text("You have collected the key",500,300);   
}