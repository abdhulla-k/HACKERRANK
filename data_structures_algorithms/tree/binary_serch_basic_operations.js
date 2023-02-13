// binary search tree
// what is a binary search tree?
// =>
// As the name implies, binary search trees are used for various searching and sorting algorithms.
// The examples include AVL tree and red-black tree. It is a non-linear data structure.
// It shows that the value of the left node is less than its parent, while the value of the right node is greater than its parent.
class BinarySearchTree {
    constructor() {
        // set root as null, beause there won't be a nod when creating the tree
        this.root = null;
    }

    // insertion manating function
    insert(value) {
        const node = new Node(value);
        // check the existance of root
        if(this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node)
        }
    }

    // insert function
    insertNode(root, node) {
        if(root.value > node.value) {
            if(this.left === null) {
                this.left = node;
            } else {
                this.insertNode(this.left, node);
            }
        } else {
            if(root.right === null) {
                this.right = value;
            } else {
                this.insertNode(this.right, node);
            }
        }
    }
}

// node class
class Node {
    constructor(value) {
        // set value and left and right
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
