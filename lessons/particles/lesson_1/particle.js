function Particle(){
  this.location = createVector(width/2, height/2);
  this.velocityX = 0;
  this.velocityY = 0;
  this.accelerationX = random(-0.05, 0.05);
  this.accelerationY = random(-0.05, 0.05);
  this.height = 20;
  this.width = 20;
  this.lifespan = 255;

  this.update = function(){
    this.velocityX += this.accelerationX;
    this.velocityY += this.accelerationY;
    this.location.x += this.velocityX;
    this.location.y += this.velocityY;
    this.lifespan -= 1;
  }

  this.draw = function(){
    stroke(0);
    fill(random(255), this.lifespan);
    ellipse(this.location.x, this.location.y, this.height, this.width)
  }
}
