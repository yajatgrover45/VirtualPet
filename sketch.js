//Create variables here
var dog,happydog;
var database;
var foodS,foodStock;
function preload()
{
  //load images here
  happydog = loadImage('doglmg.png');
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,50,50);
  dog.addImage("HappyDog",happydog);
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background("46,139,87");
  if(database!==undefined){
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      happydog = loadImage('doglmg1.png');
      }
  }
  
  drawSprites();
  //add styles here
  text(food.x,300,300);
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
food:x 

  })
if(x<=0){
  x=0 ;
}  
else{
  x=x+1;
}
}



