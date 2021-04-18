const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png" ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg) 
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    fill("black");
    textSize(24);
    if(hour===0){
        text("Time: 12am",100,100);
    }
    else if(hour>12){
        text("Time: "+hour%12+"pm",100,100); 
    }
    else if(hour=12){
        text("Time: "+12+"pm",100,100); 
    }
    else {
        text("Time: "+hour+"am",100,100); 
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJson = await response.json();

    // write code slice the datetime
    var datetime = responseJson.datetime;
    var hour = datetime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
    if(hour>4 && hour<5 ){
        bg="sunrise1.png";
    }
    else if (hour>5 && hour<6){
        bg="sunrise2.png";
    }
    else if (hour>6 && hour<7){
        bg="sunrise3.png";
    }
    else if (hour>7 && hour<8){
        bg="sunrise4.png";
    }
    else if (hour>8 && hour<9){
        bg="sunrise5.png";
    }
    else if (hour>9 && hour<18){
        bg="sunrise6.png";
    }
    else if (hour>18 && hour<19){
        bg="sunset7.png";
    }
    else if (hour>19 && hour<20){
        bg="sunset8.png";
    }
    else if (hour>20 && hour<21){
        bg="sunset9.png";
    }
    else if (hour>21 && hour<22){
        bg="sunset10.png";
    }
    else if (hour>22 && hour<23){
        bg="sunset11.png";
    }
    else if (hour>23 && hour<4){
        bg="sunset12.png";
    }


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
