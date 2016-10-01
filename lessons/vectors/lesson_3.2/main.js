// Lesson 3, a look into vector math;
function setup(){
  // put setup code here;
  createCanvas(640, 480);
  //GET THE CENTER OF THE CANVAS
  center = createVector(width/2, height/2);
}

function draw(){
  // put drawing code here
  background(255) //done to refresh the canvas so no drawing is left lingering
  strokeWeight(2);
  stroke(0);
  noFill();

  translate(width/2, height/2);
  ellipse(0,0,4,4);

  //EVERY FRAME, GET WHERE THE MOUSE IS AND STORE IT
  mouse = createVector(mouseX, mouseY);

  //mouse = mouse - center
  //This gives us the difference between the mouse location and the center location
  mouse.sub(center);

  //draw a line from center of canvas to where mouse is
  line(0,0, mouse.x, mouse.y);
}
