class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a value to node
    insert(value, root = this.root) {
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

    preOrderTraversal(root = this.root) {
        if(!root) {
            return;
        }

        console.log(root.value);

        if(root.left) {
            this.preOrderTraversal(root.left);
        }

        if(root.right) {
            this.preOrderTraversal(root.right);
        }
    }

    inOrderTraversal(root = this.root) {
        if(root.left) {
            this.inOrderTraversal(root.left);
        }

        console.log(root.value);

        if(root.right) {
            this.inOrderTraversal(root.right);
        }
    }

    postOrerTraversal(root = this.root) {
        if(root.right) {
            this.inOrderTraversal(root.right);
        }

        console.log(root.value);

        if(root.left) {
            this.inOrderTraversal(root.left);
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

const tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.insert(8);
tree.insert(9);
tree.insert(10);


tree.preOrderTraversal();
