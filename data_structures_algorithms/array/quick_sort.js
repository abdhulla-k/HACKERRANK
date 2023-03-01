function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    //find pivot element
    let pivot = arr[arr.length - 1];
    //traverse the array and put to right and left
    let left = [];
    let right = [];
    //forloop to traverse the array
    for (let i = 0; i < arr.length - 1; i++) {
        //we compare each element in the array and put into appropriate arrays
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    //repeat this for left and right sub arrays and eventually concatinate it with the pivot element
    return [...quickSort(left), pivot, ...quickSort(right)]
    //what we have is a recursion and basecase here to exit is  arraay contain one element
}

const arr = [8, 20, -2, 4, -6, 7, -55, 4, 7];
console.log(quickSort(arr));