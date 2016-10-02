function Walker(x, y, stuck){
  this.pos = createVector(x || random(width), y || random(height));
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
        if (d < r * r * 4){
          this.stuck = true;
          return true;
          break;
        }
      }
      return false;
    // }
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
    ellipse(this.pos.x, this.pos.y, r*2, r*2);
  }
}
