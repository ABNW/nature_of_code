var tree = [];
var walkers = [];
var r = 4;

function setup(){
  // put setup code here;
  createCanvas(640, 480);

  tree[0] = new Walker(width/2, height/2, true);
  for(var i = 0; i < 200; i++){
    walkers[i] = new Walker();
  }
}

console.log(walkers);

function draw(){
  // put drawing code here
  background(0);


  for(var i = 0; i < tree.length; i++){
    tree[i].show();
  }

  for(var i = 0; i < walkers.length; i++){
    walkers[i].show();
  }
  for(var n = 0; n < 200; n++){
    for(var i = 0; i < walkers.length; i++){
      walkers[i].walk();
      //walkers[i].show();
      if(walkers[i].checkStuck(tree)){
        tree.push(walkers[i]);
        walkers.splice(i, 1);
      }
    }
  }

}

function distSq(a,b){
 var dx = b.x - a.x;
 var dy = b.y - a.y;
 return dx * dx + dy * dy;
}
