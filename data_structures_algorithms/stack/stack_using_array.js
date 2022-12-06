// stack is a lenior data structure.
// Stack is an ordered list or a collection of data which is going to follow a rule for insertion or deletion of the data.
// The rule is Insertion and Deletion is only possible from one end. First In Last Out (FILO) or Last In First Out (LIFO).

// create a stack
class Stack {
    maxLen = 5;
    currLen = -1;

    constructor() {
        this.items = [];
    }

    // add new data into stack
    push(value) {
        if (this.currLen < this.maxLen - 1) {
            this.items.push(value);
            this.currLen++;
            console.log("inserted into stack");
        } else {
            console.log("stack over flow");
        }
    }

    // delete an existing element from stack
    pop() {
        if (this.currLen < 0) {
            console.log("stack under flow");
        } else {
            this.items.pop();
            this.currLen--;
            console.log("deleted last element from stack");
        }
    }

    // print the last element from stack
    peek() {
        if (this.currLen < 0) {
            console.log("stack under flow");
        } else {
            console.log(`peek element is: ${this.items[this.currLen]}`);
        }
    }

}

const newStack = new Stack();

newStack.peek();
newStack.pop();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.peek();
newStack.push(5);
newStack.push(6);
newStack.push(6);
newStack.pop();