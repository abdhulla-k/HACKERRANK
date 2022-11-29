let head;

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

// function to find the count of positive nad negtive and zeros
function printList() {
    let n = head;
    let p = 0;
    let neg = 0;
    let z = 0;
    while (n != null) {
        if (n.data === 0) {
            z++;
        } else if (n.data < 0) {
            neg++;
        } else {
            p++;
        }
        n = n.next;
    }
    console.log(`negative numbers: ${neg}\npositive numbers: ${p}\nzeros: ${z}`);
}

head = new Node(3);
let a = new Node(0);
head.next = a;
let b = new Node(-1);
a.next = b;
let c = new Node(0);
b.next = c;
printList();

