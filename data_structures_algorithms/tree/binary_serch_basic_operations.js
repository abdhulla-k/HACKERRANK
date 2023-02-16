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
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node)
        }
    }

    // insert function
    insertNode(root, node) {
        if (root.value > node.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    // search function to check the 
    search(value) {
        if (!this.root.value) return false;
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // in order traversal function
    // to print entire tree
    // what is in order traversal?
    // In this traversal method, the left subtree is visited first, then the root and later the right sub-tree.
    inOrderTraversal(root) {
        // go to left first
        if (root.left !== null) {
            this.inOrderTraversal(root.left);
        }
        
        // print the value
        console.log(root.value);

        // go to right after going left
        if (root.right !== null) {
            this.inOrderTraversal(root.right);
        }
    }

    // preorder traversal function
    // to print the values of tree
    // what is preorder traversal ?
    // It means that, first root node is visited after that the left subtree is traversed recursively, and finally,
    // right subtree is recursively traversed.
    preOrderTraversal(root) {
        console.log(root.value);

        if (root.left !== null) {
            this.preOrderTraversal(root.left);
        }

        if (root.right !== null) {
            this.preOrderTraversal(root.right);
        }
    }

    // postorder traversal function
    // to print the values of tree
    // what is postorder traversal?
    // Postorder traversal is used to visit the node in the tree. It pursues the rule of LRN, which means Left-right-node.
    postOrderTraversal(root) {
        if (root.left !== null) {
            this.postOrderTraversal(root.left);
        }

        if (root.right !== null) {
            this.postOrderTraversal(root.right);
        }

        console.log(root.value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return null;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // Node to be deleted found
            if (root.left === null && root.right === null) {
                // Case 1: Node has no children
                return null;
            } else if (root.left === null) {
                // Case 2: Node has one child
                return root.right;
            } else if (root.right === null) {
                // Case 2: Node has one child
                return root.left;
            } else {
                // Case 3: Node has two children
                // Find minimum value in right subtree
                let minRight = root.right;
                while (minRight.left !== null) {
                    minRight = minRight.left;
                }
                // Replace node value with minimum value in right subtree
                root.value = minRight.value;
                // Delete the minimum node in right subtree
                root.right = this.deleteNode(root.right, minRight.value);
            }
        }

        return root;
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
table.insert(25);
table.insert(15);
table.insert(10);
table.insert(4);
table.insert(22);
table.insert(12);
table.insert(18);
table.insert(24);
table.insert(50);
table.insert(35);
table.insert(31);
table.insert(44);
table.insert(70);
table.insert(66);
table.insert(90);

// console.log(table.search(3));
// table.deleteNode(table.root, 8);
console.log('---------inorder-------------')
table.inOrderTraversal(table.root);
console.log('---------preorder-------------')
table.preOrderTraversal(table.root);
console.log('---------postorder-------------')
table.postOrderTraversal(table.root);
