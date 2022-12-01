let head;

// create a doubly linkd list
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
        this.previous = null
    }

}

// function to print all the function
function printList(head) {
    console.log("-------------------------traverse forward--------------------------");
    let n = head;
    while (n != null) {
        console.log(n.data);
        n = n.next;
    }
}

// function to travers reverselly through a linkd list
function traverseAndPrintReversely(end) {
    console.log("-------------------------traverse reverse------------------------");
    n = end;
    while (n != null) {
        console.log(n.data);
        n = n.previous;
    }
}

// create objects
head = new Node(1);
let a = new Node(2);
head.next = a;

let b = new Node(3);
a.next = b;
a.previous = head;

let c = new Node(4);
b.next = c;
b.previous = a;

c.previous = b;

// print the all list;
printList(head);
traverseAndPrintReversely(c);