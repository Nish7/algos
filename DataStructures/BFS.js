class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class bt {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let curr = this.root;

    while (true) {
      if (val < curr.val) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else if (val > curr.val) {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      } else if (val == curr.val) return undefined;
    }
  }

  bfs() {
    let node = this.root;
    let q = [];
    let vis = [];

    q.push(node);

    while (q.length) {
      node = q.shift();
      vis.push(node.val);

      if (node.left) q.push(node.left);

      if (node.right) q.push(node.right);
    }

    // console.log(vis);
    return vis;
  }

  dft_pre() {

    let v = [];

    function traverse(node){
        v.push(node.val);
        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)   
    }

    traverse(this.root);
    return v;
    
  }

  dft_post() {

    let v = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      v.push(node.val);
    }

    traverse(this.root);
    return v;

  }

  dft_inorder() {

    let v = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      v.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return v;
  
  }


  
}

let tree = new bt();
tree.insert(102);
tree.insert(100);
tree.insert(99);
tree.insert(101);
tree.insert(104);
tree.insert(103);
tree.insert(105);

tree.bfs();
tree.dft_pre();
tree.dft_post();

console.log(tree);
