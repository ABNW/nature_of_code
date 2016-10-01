var xspeed = 1;
var yspeed = 2;
var x = 100;
var y = 100;

function setup(){
  // put setup code here;
  createCanvas(640, 480);
  background(0);
}

function draw(){
  // put drawing code here
  background(0);

  // update position of ball
  x = x + xspeed;
  y = y + yspeed;

  // check side edges
  if ((x > width) || x < 0){
    xspeed = xspeed *-1;
  }

  // check top edges
  if ((y > height) || y < 0){
    yspeed = yspeed *-1;
  }

  stroke(0);
  strokeWeight(2);
  fill(255);

  ellipse(x, y, 40, 40);
}

//TODO: Transpose to vanilla canvas

// window.requestAnimFrame = (function(){
//   return  window.requestAnimationFrame       ||
//           window.webkitRequestAnimationFrame ||
//           window.mozRequestAnimationFrame    ||
//           function( callback ){
//             window.setTimeout(callback, 1000 / 60);
//           };
// })();
//
// var canvasElement = document.getElementById('myCanvas');
// var context = canvasElement.getContext('2d');
