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
            if(root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if(root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    // in order traversal function
    // to print entire tree
    // what is in order traversal?
    // In this traversal method, the left subtree is visited first, then the root and later the right sub-tree.
    inOrderTraversal(root) {
        // go to left first
        if(root.left !== null) {
            this.inOrderTraversal(root.left);
        }
        // go to right after going left
        if(root.right !== null) {
            this.inOrderTraversal(root.right);
        }
        // print the value
        console.log(root.value);
    }

    // preorder traversal function
    // to print the values of tree
    // what is preorder traversal ?
    // It means that, first root node is visited after that the left subtree is traversed recursively, and finally,
    // right subtree is recursively traversed.
    preOrderTraversal(root) {
        console.log(root.value);
        if(root.left !== null) {
            this.preOrderTraversal(root.left);
        }

        if(root.right !== null) {
            this.preOrderTraversal(root.right);
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

let table = new BinarySearchTree();
table.insert(10);
table.insert(11);
table.insert(9);
table.insert(12);
table.insert(11);
table.insert(8);
table.insert(2);
table.insert(1);
table.insert(3);

table.preOrderTraversal(table.root);
