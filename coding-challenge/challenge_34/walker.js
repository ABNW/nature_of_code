function Walker(x, y, stuck){

  if(x && y){
    this.pos = createVector(x,y);
  } else{
    this.pos = randomPoint();
  }

  this.r = 7;

  this.stuck = stuck;

  this.walk = function(){
    var vel = p5.Vector.random2D();
    this.pos.add(vel);
    this.pos.x = constrain(this.pos.x, 0, width);
    this.pos.y = constrain(this.pos.y, 0, height);
  }

  this.checkStuck = function(others){
    // while(!stuck){
      for(var i = 0; i < others.length; i++){
        var d = distSq(this.pos, others[i].pos);
        if (d < this.r * others[i].r * 4){
          this.stuck = true;
          return true;
          break;
        }
      }
      return false;
    // }
  }

  function randomPoint(){
    var i = floor(random(4));
    if (i === 0){
      var x = random(width);
      return createVector(x, 0);
    } else if(i === 1){
      var x = random(width);
      return createVector(x, height);
    } else if(i === 2){
      var y = random(height);
      return createVector(0, y);
    } else{
      var y = random(height);
      return createVector(width, y);
    }
  }

  this.show = function(){
    // strokeWeight(r * 2);
    stroke(255, 100);
    if(this.stuck){
      fill(255, 0, 100)
      stroke(255, 0, 100);
    } else {
      fill(255)
    }
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }
}
