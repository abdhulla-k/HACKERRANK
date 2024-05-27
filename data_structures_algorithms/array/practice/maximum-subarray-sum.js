const arrayOne = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const arrayTwo =  [1, 2, 3, 4, -10, 7, 8, -10, 10];

// O(n^2) time | O(1) space
function findMaximumSubarraySum(array) {
    let maxSum = 0;
    let currentSum = 0;
    let startIndex = 0;
    let endIndex = 0;
    
    for(let i in array) {
        currentSum = 0;

        for(let j = i; j < array.length; j++) {
            currentSum += array[j];

            if(currentSum > maxSum) {
                maxSum = currentSum;
                startIndex = i;
                endIndex = j;
            }
        }
    }

    return {
        array: array.slice(startIndex, endIndex + 1),
        sum: maxSum
    };
}

const result = findMaximumSubarraySum(arrayOne);
console.log(result);