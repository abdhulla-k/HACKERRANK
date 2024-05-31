const array = [1, 2, 3, 4, 5, 6];
const target = 9;

function findTargetPare(array, target) {
    const object = {};

    for(let i in array) {
        object[array[i]] = i;

        if(object[target - array[i]]) {
            console.log([object[target - array[i]], i]);
        }
    }
}

findTargetPare(array, target);