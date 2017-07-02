class Tree {
  constructor(){
    this.root = null;
  }

  addValue(value){
    var n = new Node(value);
    if(this.root === null){
      this.root = n;
    } else {
      this.root.addNode(n);
    }
  }

  traverse(){
    this.root.visit();
  }

  search(value){
    var result = this.root.search(value);
    if(result !== null){
      console.log('Value found! It appears ' + result.count + ' times.');
      return result;
    } else if(result === null){
      console.log('Not Found :(');
    } else {
      console.log('Error');
    }
  }

}

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 1;
  }

  addNode(n){
    if(n.value < this.value){
      if(this.left === null){
        this.left = n;
      } else{
        this.left.addNode(n);
      }
    } else if(n.value > this.value){
      if(this.right === null){
        this.right = n;
      } else{
        this.right.addNode(n);
      }
    } else{
      this.count++;
    }
  }

  search(value){
    if(this.value == value){
      return this;
    } else if(value < this.value && this.left !== null){
      return this.left.search(value);
    } else if(value > this.value && this.right !== null){
      return this.right.search(value);
    } else{
      return null;
    }
  }

  visit(){
    if(this.left !== null){
      this.left.visit();
    }
    console.log('Value: ' + this.value + ' Count: ' + this.count);
    if(this.right !== null){
      this.right.visit();
    }
  }
}

const tree = new Tree();

for(var i = 0; i < 1000; i++){
  tree.addValue(Math.floor((Math.random() * 100) + 1));
}

console.log(tree);
tree.traverse();
