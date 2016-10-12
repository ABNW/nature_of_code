var bird;
var pipes = [];

function setup(){
  // put setup code here;
  createCanvas(400, 600);

  bird = new Bird();
  pipes.push(new Pipe());

}

function draw(){
  // put drawing code here
  background(0);

  if(frameCount % 75 === 0){
    pipes.push(new Pipe());
  }

  for(var i = 0; i < pipes.length; i++){

    if(pipes[i].hits(bird)){
      console.log('collision');
    }

    if(pipes[i].offScreen()){
      pipes.splice(i, 1);
    }

    pipes[i].update();
    pipes[i].show();
  }

  bird.update();
  bird.show();

}

function keyPressed(){
  if(key == ' '){
    bird.up();
  }
}
