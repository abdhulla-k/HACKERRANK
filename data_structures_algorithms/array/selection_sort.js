function selectionSort(arr) {
    // save the length of array
    let len = arr.length;

    // traverse through array
    for (let i = 0; i < len; i++) {
        // assume the index of min element is first one and change it if found smaller one
        let indexOfMin = i;

        // traverse through the array to find the smalles one
        for (let j = i + 1; j < len; j++) {
            // save the smallest element to the indexOfMin variable
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        // move the smallest element to the appropriate position
        if (indexOfMin != i) {
            const temp = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = temp;
        }
    }

    // return sorted array
    return arr;
}

const array = [1, 2, 3, 5, 2, 7, 3, 9, 22, 9, 10];
console.log(selectionSort(array));