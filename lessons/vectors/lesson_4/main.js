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

  //let's look at multiplying this vector...
  // mouse.mult(1);

  //here we are getting the magnitude (length) of the vector...
  //and assigning it to a variable m.
  // var m = mouse.mag();
  // fill(255,0,0);

  //Here we make the length of a rectangle be the same size as the magnitide of
  // the mouse vector :)
  // rect(0,0,m,20);

  //normalizing allows us to scale to later on and then do it with what we want;
  //there is a function called setMag that does both normalization and multiplication
  //When you normalize a vector, the magnitude becomes irrelevant because we can
  //just target that with mult later on, so it only has direction. This allows
  //us to create vector fields later on
  mouse.normalize();
  mouse.mult(50);

  //this can become
  mouse.setMag(50);

  //draw a line from center of canvas to where mouse is
  line(0,0, mouse.x, mouse.y);
}
