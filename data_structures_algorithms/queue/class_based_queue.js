class Queue {
    constructor() {
        this.items = [];
    }

    // Implementing various methods of javascript queue:// 1. adding element to the queue
    enqueue(item) {
        this.items.push(item);
    }

    // 2. removing element from the queue
    dequeue() {
        // checking if the queue is empty or not before removing it!
        if (this.isEmpty()) {
            return "Queue is empty: underflow!";
        }
        return this.items.shift();
    }

    // 3. returning the Front element of
    front() {
        // checking if the queue is empty or not!
        if (this.isEmpty()) {
            return "Queue is empty!";
        }
        return this.items[0];
    }

    // 4. returning true if the queue is empty.
    isEmpty() {
        return this.items.length == 0;
    }

    // 5. printing the queue.
    printQueue() {
        var queue = "";
        for (var i = 0; i < this.items.length; i++) {
            queue += this.items[i] + " ";
        }
        return queue;
    }

    // 6. getting the size of the queue.
    size() {
        return this.items.length;
    }
}

// creating object of the Queue class:
var queue = new Queue();

// Adding elements to the queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

// printing the current queue:
console.log("the current queue is: ", queue.printQueue());

// printing the top element of the queue.
var top_element = queue.front();
console.log("The top element of the queue is: ", top_element);

// printing the size of the queue.
var size = queue.size();
console.log("The size of the queue is: ", size);

// removing elements form queue:
var removed_element = queue.dequeue();
console.log("Removed element is: ", removed_element);
removed_element = queue.dequeue();
console.log("Removed element is: ", removed_element);

// printing the current queue:
console.log("The current queue is: ", queue.printQueue());

// printing the top element of the queue.
var top_element = queue.front();
console.log("The top element of the queue is: ", top_element);

// printing the size of the queue.
var size = queue.size();
console.log("The size of the queue is: ", size);

