class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          // Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          } 
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(3)
tree.insert(6)
tree.insert(7)
tree.insert(2)
JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { 
    value: node.value 
    };
  console.log('tree: ', tree)
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}







/*
1. Create a new Node by passing a value
2. Check if there is a root node, if it is null, then set it to newNode
3. BUT, if THERE is a root already, then --> currentNode === this.root,
   because we are going to traverse it. 
   We will use while loop since we do not know how long we are going to 
   traverse it for. 

4. Now we found out that there is a root node, we check if the value we have 
   is smaller than the root node:
   if(value < currentNode.value) ?

   IF it is smaller, then we go LEFT.

   Here we do one of two things:
      a) if there is no currentNode on the left, assign newNode as a new value
         by saying: 
         if(!currentNode.left) {
           currentNode.left = newNode;
           return this;
         }

      b) However, if there is something to the left, 
         then continue traversing by using recursion:
         currentNode = currentNode.left;

5. Second scenario, IF the value is greater than the current node, GO RIGHT. 

    Here again we write two scenarios:
      a) if there is no right node:
         if(!currentNode.right) {
           currentNode.right = newNode;
           return this;
         }
      b) IF there is already a right node, then we will keep traversing until 
         there is no node. 
         currentNode = currentNode.right;
*/  

