

//var snow, background;

function preload () {
  backgroundImage = loadImage("snow2.jpg");
  snowImage = loadImage("snow4.webp","snow5.webp");

}

function setup() {
  createCanvas(1020,650);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImage);  
 
  
 
  drawSprites();
}

function snow(){
  rand = Math.round(random(1,2));
  if(frameCount%50===0){
      snowCreatedFrame = frameCount;
      snow = createSprite(random(1,1020), random(0,650), 5, 5);
      switch(rand){
           case 1: snow.addImage(snow4);
           break;
           case 2: snow.addImage(snow5);
           break;
           default: break;
      }

      snow.scale = random(0.1,0.2);
     
  }
}