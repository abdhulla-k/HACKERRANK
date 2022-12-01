let head;

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}


// function to create each node and insert that to the end of the list. root is the head
function addToList(root, value) {
    // create a node
    let temp = new Node(value);

    // declare a variable to keep the loop to find the last value;
    let ptr;

    // if thre is no value in list or list is empth
    if (root === null) {

        // save head; first one is this;
        root = temp;
    } else {

        // save the root in the variable to loop through the list
        ptr = root;
        while (ptr.next != null) {
            /// change the ptr value to track the end of the list
            ptr = ptr.next;
        }
        // add the node to the end of the list
        ptr.next = temp;
    }

    // return the root
    return root;
}

// function to convert the array to linkd list
function arrayToList(arr) {
    // length of the array
    let n = arr.length;

    // first set head as null; becouse the list is empty; this will check from addToList function
    let root = null;

    // loop through the array and call addToList function
    for (let i = 0; i < n; i++) {
        root = addToList(root, arr[i]);
    }

    // rturn head
    return root;
}

// function to print the linkd list;
function printList(head) {
    console.log("---------------------linkd list----------------------");
    let n = head;
    // loop through the linkd list and print the value
    while (n != null) {
        console.log(n.data);
        n = n.next;
    }
}

// function to add a value to the end and the beginning of a linkd list
function addToEndAndBeggining(value, head) {
    function addToEnd() {
        // create new node
        let newNode = new Node(value);
        let n = head;
        // loop through the list
        while (n.next != null) {
            n = n.next;
        }
        n.next = newNode;
    }

    function addToBeggining() {
        // create new node
        let newNode = new Node(value);
        newNode.next = head;
        head = newNode;
        return head;
    }

    addToEnd();
    return addToBeggining();
}



// array to linkd list
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
head = arrayToList(array);
printList(head);

// add a value to the end and start of a linkd list
head = addToEndAndBeggining(33, head);
printList(head);