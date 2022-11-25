// trying to create a sample linkd list

// this is head. the first node of our linkd list
let head;


// this is class to create linkd list
class Node {
    constructor(value) {
        // value that saved in our node
        this.data = value;

        // the address of next node.
        // null is default we will change it while creation.
        // so the last one will be null.
        this.next = null;
    }
}

// function to find and print the data from our linkd list
function printList() {
    let n = head;
    while (n != null) {
        console.log(n.data)
        n = n.next;
    }
}

// creating a linkd sist or inserting value
head = new Node(1);
let b = new Node(2);
head.next = b;
let c = new Node(3);
b.next = c;


// print all the value that saved in our linkd list
printList();