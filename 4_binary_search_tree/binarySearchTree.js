class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return undefined;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (current.left === null) return false;
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) return false;
        current = current.right;
      } else {
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(15);
tree.insert(6);
tree.insert(11);
tree.insert(3);
console.log(tree.insert(7));
console.log(tree.insert(7));

console.log(tree.contains(11));
console.log(tree.contains(6));
console.log(tree.contains(1));
