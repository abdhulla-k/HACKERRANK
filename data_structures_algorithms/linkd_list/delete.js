let head;

// create node
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}


// function to print the linst
function printList() {
    let n = head;
    while (n != null) {
        console.log(n.data);
        n = n.next;
    }
}

// function delete a value
function deleteFromList(value) {
    let temp = head;

    // variable to save previous iteration while looping
    let pre = null;

    // id head node holds the key to be deleted
    if(temp != null && temp.data === value) {
        head = temp.next;

        // print the list
        printList();
        return;
    }

    // search for the key to be deleted
    while(temp != null && temp.data != value) {
        pre = temp;
        temp = temp.next;
    }

    // if the key is not exist
    if(temp == null) {
        console.log("value not exist!");

        // print the list
        printList();
        return;
    }

    // delete the value
    pre.next = temp.next;

    // print the list
    printList();
}


// create list elements
head = new Node(1);
a = new Node(2);
head.next = a;
b = new Node(3);
a.next = b;
c = new Node('a');
b.next = c;

// print the list
// printList();
deleteFromList(3);