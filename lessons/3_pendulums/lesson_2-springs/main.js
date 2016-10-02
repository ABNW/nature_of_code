// var xspeed = 1;
// var yspeed = 2;
// var x = 100;
// var y = 100;

var origin;
var bob;
//REMEMBER ANGLES ARE RADIANS, NOT DEGREES
var angle = Math.PI / 4;
var aVel = 0;
var aAcc = 0;

function setup(){
  // put setup code here;
  createCanvas(640, 480);
  len = 180;
  origin = createVector(width/2, 0);
  bob = createVector(width/2,len);
}

function draw(){
  // put drawing code here
  background(255);

  bob.x = origin.x + len * sin(angle);
  bob.y = origin.y + len * cos(angle);

  angle += aVel;
  aVel += aAcc;

  aVel *= 0.99

  line(origin.x, origin.y, bob.x, bob.y);
  ellipse(bob.x, bob.y, 40, 40);

  aAcc = -0.01 * sin(angle);
}
