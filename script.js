// Global Variables
var p5Canvas;
var myName;

// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Melvin");
}


var shellX = 500
var shellY = 390
var shellvelocity = 1;
var asteroidvelocity = 6;
var asteroidX = 250;
var asteroidY = 10;
var asteroiddiameter = 30;
var asteroidgrowth = 1;
var backgrounddarkness = 170;
var sundarkness = 200;
var darkness = 1;
var shelldarkness = 70;

//function impact(){
    //darkness = 1;
//}
function dim(){
    shelldarkness -= darkness;
}
function dimstop(){
    return darkness = 0;
}
function draw() {
    colorMode(HSB);
    backgrounddarkness -= darkness;
    sundarkness -= darkness;
    
    setTimeout(dim,1900);
    setTimeout(dimstop, 3000);
    
  // Example. You can remove when you're ready!
  background(200, 204, backgrounddarkness); // try changing this to a blue background

  asteroidX += asteroidvelocity;
    asteroidY += asteroidvelocity;
    asteroiddiameter += asteroidgrowth;
    fill(25, 104, 30)//asteroid
ellipse(asteroidX,asteroidY, asteroiddiameter,asteroiddiameter);

  fill(105,254,backgrounddarkness);
  rect(0,400,800,200);
  fill(100,264,shelldarkness);    // Always call fill() before the shape you want to fill in.
  rect(515, 390, 18, 21); 
  rect(510, 390, 18, 22);
  rect(475, 390, 18, 21);
  rect(465, 390, 18, 22);
    triangle(575,390,520,390, 505,375);
    ellipse(450,380,27,18);
    
  fill(100,264,shelldarkness);
  arc(shellX, shellY, 87, 78, PI,TWO_PI );
  fill(210,200,backgrounddarkness);
  arc(200,400,130,100,0,PI);
  fill(50,104,sundarkness);
ellipse(10,20,65,65);// Draw a 30x20 pixel rectangle at coordinate (55,55)
    
}
