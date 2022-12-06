
// creating a sample stack using linkd list

let root;

// node
class StackNode {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// function to check is it the stack empty or not
function isEmpty() {
    if (root == null) {
        return true;
    } else
        return false;
}

// push a value to stack
function push(data) {
    let newNode = new StackNode(data);

    if (root == null) {
        root = newNode;
    } else {
        let temp = root;
        root = newNode;
        newNode.next = temp;
    }
    console.log(`${data}, pushed to stack`);
}

// delete the top value from stack
function pop() {
    let popped = Number.MIN_VALUE;
    if (root == null) {
        console.log("Stack is Empty");
    } else {
        popped = root.data;
        root = root.next;
    }
    return popped;
}

// function to find the top value from stack
function peek() {
    if (root == null) {
        console.log("Stack is empty")
        return Number.MIN_VALUE;
    } else {
        return root.data;
    }
}

// push some data to the stack
push(10);
push(20);
push(30);

console.log(pop() + " popped from stack")

console.log("Top element is " + peek());
