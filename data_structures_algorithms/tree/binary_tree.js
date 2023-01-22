// create a binary tree

// Binary Search tree is a binary tree in which nodes that have lesser value are stored on the left while
// the nodes with a higher value are stored at the right.
class BinaryTree {
    // constructor accespts first data to create root node
    constructor() {
        this.root = null;
    }

    // function to insert a value to the tree
    // and controlle the insertion process
    insert(data) {
        // create a new node
        const newNode = new Node();
        // check is ther root exist or not
        if (this.root === null) {
            // not exist
            // assign to root
            this.root = newNode
        } else {
            // root already exist
            // so call the insertion function
            this.insertNode(this.root, newNode)
        }
    }

    // function to insert a node
    insertNode(node, newNode) {
        // check is it less than node data or not
        // go to left side if it is less
        if (newNode.data < node.data) {
            // check is ther previous data exist or not
            if (node.left === null) {
                // assign value if ther is no data
                node.left = newNode;
            } else {
                // value exist. so
                // call the function again
                this.insertNode(node.left, newNode);
            }
        } else {
            // go to right side if it is greater than node data
            // check is it null or not
            if (node.right === null) {
                // assign the new value if there is no previous data
                node.right = newNode;
            } else {
                // there is data. so call the function again
                this.insertNode(node.right, newNode);
            }
        }
    }

    // function to delete a value from the tree
    remove(value) {
        this.root = this.removeNode(this.root, value)
    }

    removeNode(current, value) {
        // base case, if the tree is empty 
        if (current === null) return current

        // when value is the same as current's value, this is the node to be deleted
        if (value === current.value) {
            // for case 1 and 2, node without child or with one child
            if (current.left === null && current.right === null) {

                return null

            } else if (current.left === null) {

                return current.right

            } else if (current.right === null) {

                return current.left

            } else {

                /// node with two children, get the inorder successor, 
                //smallest in the right subtree
                let tempNode = this.kthSmallestNode(current.right)
                current.value = tempNode.value
                /// delete the inorder successor

                current.right = this.removeNode(current.right, tempNode.value)
                return current
            }

            // recur down the tree

        } else if (value < current.value) {
            current.left = this.removeNode(current.left, value)
            return current

        } else {
            current.right = this.removeNode(current.right, value)
            return current
        }
    }

    /// helper function to find the smallest node

    kthSmallestNode(node) {
        while (!node.left === null)
            node = node.left

        return node
    }



}

// a class tocreate nodes
class Node {
    // cosstructor will accept a data
    constructor(data) {
        // and set the data in data and right and left null
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// create a tree instance
const tree = new BinaryTree();
console.log(tree);