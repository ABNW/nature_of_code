//
// function setup(){
//   // put setup code here;
//   createCanvas(640, 480);
//
//   //TODO: Turn this into an object that can be called by using the new keyword...
//   var Ball = {
//     x: width/2,
//     y: width/2,
//     xspeed: 2.5,
//     yspeed: -2,
//
//     move: function(){
//       this.x = this.x + this.xspeed;
//       this.y = this.y + this.yspeed;
//     },
//
//     bounce: function(){
//       if ((this.x > width) || this.x < 0){
//         this.xspeed = this.xspeed *-1;
//       }
//
//       // check top edges
//       if ((this.y > height) || this.y < 0){
//         this.yspeed = this.yspeed *-1;
//       }
//     },
//
//     display: function(){
//       ellipse(this.x, this.y, 40, 40);
//     }
//   }
//   b = Ball;
// }
//
// function draw(){
//   // put drawing code here
//   background(255) //done to refresh the canvas so no drawing is left lingering
//   b.move();
//   b.bounce();
//   b.display();
// }

//We have transformed the previous code by abstracting away the standard x & y
// attributes into vectors, that come with a host of extra methods to make manipulating
// them easier.
function setup(){
  // put setup code here;
  createCanvas(640, 480);

  //TODO: Turn this into an object that can be called by using the new keyword...
  var Ball = {

    //Initialise location and velocity vectors
    location: createVector(width/2, height/2),
    velocity: createVector(2.5,-2),


    //VELOCITY GETS ADDED TO LOCATION
    //EVERY FRAME IS LOCATION CHANGED BY VELOCITY
    move: function(){
      this.location.add(this.velocity);
    },

    //CHECK ARENT GOING OFF CANVAS, IF WE ARE INVERSE VELOCITY
    bounce: function(){
      if ((this.location.x > width) || this.location.x < 0){
        this.velocity.x = this.velocity.x *-1;
      }

      // check top edges
      if ((this.location.y > height) || this.location.y < 0){
        this.velocity.y = this.velocity.y *-1;
      }
    },

    //THEN DRAW OURSELVES...
    display: function(){
      ellipse(this.location.x, this.location.y, 40, 40);
    }
  }

  b = Ball;
}

function draw(){
  // put drawing code here
  background(255) //done to refresh the canvas so no drawing is left lingering
  b.move();
  b.bounce();
  b.display();
}
