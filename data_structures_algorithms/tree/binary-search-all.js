class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a value to node
    insert(value, root) {
        if(this.root === null) {
            this.root = new Node(value);;
        } else {
            if(value < root.value) {
                if(root.left) {
                    this.insert(value, root.left);
                } else {
                    root.left = new Node(value);;
                }
            } else {
                if(root.right) {
                    this.insert(value, root.right);
                } else {
                    root.right = new Node(value);
                }
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

