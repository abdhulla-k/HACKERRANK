
// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. 
// The array is virtually split into a sorted and an unsorted part. 
// Values from the unsorted part are picked and placed at the correct position in the sorted part.


function insertionSort(arr) {
    // loop throug array
    for (let i = 1; i < arr.length; i++) {

        // save the current value and current index
        let currentVal = arr[i];
        let j = i - 1;

        // move all value to the right side of the element
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentVal;
    }

    // return the sorted array
    return arr
}

const array = [1, 2, 3, 5, 2, 7, 3, 9, 22, 9, 10];

console.log(insertionSort(array))