function heapSort(array) {
    // Build max heap from the given array
    buildMaxHeap(array);

    // Swap first and last element of unsorted region, and re-heapify
    for (let i = array.length - 1; i > 0; i--) {
        const temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        heapify(array, i, 0);
    }

    // Return the sorted array
    return array;
}

// Function to build max heap
function buildMaxHeap(array) {
    // Find the index of the last non-leaf node
    const lastParentIndex = Math.floor(array.length / 2) - 1;

    // Re-heapify from last non-leaf node to root
    for (let i = lastParentIndex; i >= 0; i--) {
        heapify(array, array.length, i);
    }
}

// Function to heapify a node at index i in a heap of size heapSize
function heapify(array, heapSize, i) {
    const leftChildIndex = 2 * i + 1;
    const rightChildIndex = 2 * i + 2;
    let maxIndex = i;

    // Find the index of the maximum value among the node and its children
    if (leftChildIndex < heapSize && array[leftChildIndex] > array[maxIndex]) {
        maxIndex = leftChildIndex;
    }

    if (rightChildIndex < heapSize && array[rightChildIndex] > array[maxIndex]) {
        maxIndex = rightChildIndex;
    }

    //   5
    //   / \
    //   3   8
    //  / \ / \
    // 8  6 4  7
    // leftChildIndex = 2 * i + 1 = 2 * 1 + 1 = 3
    // rightChildIndex = 2 * i + 2 = 2 * 1 + 2 = 4

    // Swap the node with the maximum value among the node and its children,
    // and recursively heapify the subtree rooted at the swapped child node
    if (maxIndex !== i) {
        const temp = array[i];
        array[i] = array[maxIndex];
        array[maxIndex] = temp;
        heapify(array, heapSize, maxIndex);
    }
}

const array = [10, 4, 8, 2, 25]
console.log(heapSort(array))