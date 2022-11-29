// there are three sinarios to insert into a linkd list
// 1. At the front of the linked list  ,  2. After a given node. ,  3. At the end of the linked list.

let head;

// function to add a value to the first posision of a linkd list
function addToStart(value) {
    let newNode = new Node(value);
    newNode.next = head,
    head = newNode;
    printList()
}

// function to find and print the data from our linkd list
function printList() {
    let n = head;
    while (n != null) {
        console.log(n.data)
        n = n.next;
    }
}

// create linkd list
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

// creating a linkd sist or inserting value
head = new Node(1);
let b = new Node(2);
head.next = b;
let c = new Node(3);
b.next = c;

addToStart(55);