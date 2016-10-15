var particles;

function setup(){
  // put setup code here;
  createCanvas(640, 480);
  particles = [];
  for(var i = 0; i < 100; i++){
    particles.push(new Particle());
    console.log('particle Added');
  }
}

function draw(){
  // put drawing code here
  background(0);
  for(var i = 0; i < particles.length; i++){
    if(particles[i].lifespan < 0){
      particles.splice(i, 1);
      particles.push(new Particle());
    }
    particles[i].draw()
    particles[i].update();
  }

}
