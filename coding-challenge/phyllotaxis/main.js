var n = 0;
var m = 0;
c = 6;

function setup(){
  // put setup code here;
  createCanvas(640, 480);
  angleMode(DEGREES);
  background(0);


}

function draw(){
  // put drawing code here
  var a = n * 137.4;
  var a2 = m * -137.4;

  var r = c * sqrt(n);
  var r2 = c * sqrt(n);
  //We subtract half the width and half the height to move it to the center
  //of the screen, because without this, we would be plotting stuff at the origin
  //point which is 0,0, which is top left of the canvas
  var x = r * cos(a) + width/2;
  var y = r * sin(a) + height/2;

  var x2 = r2 * cos(a2) + width/2;
  var y2 = r2 * sin(a2) + height/2;

  fill(n % 255, 100, 200);
  ellipse(x,y,4,4);
  fill(m*3 % 255, 100, 200);
  ellipse(x2,y2,4,4);

  m++
  n++
}
