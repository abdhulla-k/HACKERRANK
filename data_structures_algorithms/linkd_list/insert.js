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

// function to insert a new value to the end of a linkd list
function insertToEnd(value) {

    // create new node
    let newNode = new Node(value);

    // set new node as second element if there is only one element in linkd list
    if(head === null) {
        head = newNode;
        return;
    }

    newNode.next = null;

    // save the head to a new variable to traverse
    let last = head;

    // traverse through the linkd list
    while(last.next != null) {
        last = last.next;
    }

    // insert the new node at last
    last.next = newNode;

    // print the linkd list
    printList();
    return
}

// function to insert a node to after a given node
function insertToAfter(previous_node, value) {

    // assure the next value is not null
    if(previous_node.next === null) {
        console.log("the given previous nod cannot be null");
        return;
    }

    // create new node
    let newNode = new Node(value);

    // insert new node
    newNode.next = previous_node.next;
    previous_node.next = newNode;
    return;
}

// function to find and print the data from our linkd list
function printList() {
    let n = head;
    console.log("---------------------------------------------------------")
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
insertToEnd(55);