// bubble sorting
// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.
// This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.

// the complexity of bubble sort is: O(N2)
function bubbleSort(array) {

    // creating a copy of the array to sort
    const ar = array.slice()

    // sort. traverse through the array
    for (let i = 0; i < ar.length - 1; i++) {
        for (let j = 0; j < ar.length - 1 - i; j++) {
            
            // swap the elements if it is bigger than.
            if (ar[j] > ar[j + 1]) {
                [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]];
            }
        }
    }
    // returning the sorted array
    return ar;
}

const array = [1, 4, 3, 8, 888, 123, 43, 42, 2, 55, 234, 92];

console.log(bubbleSort(array));