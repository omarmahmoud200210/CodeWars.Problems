// Complete the function to find the count of the most frequent item of an array. 
// You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 

// The most frequent number in the array is -1 and it occurs 5 times.

function mostFrequentItemCount(collection) {
    let times = [];
    for (let i = 0; i < collection.length; i++) {
        let count = 0;
        for (let j = 0; j < collection.length; j++) {
            if (collection[i] === collection[j]) {
                count++;
                //console.log(`${collection[i]} -- ${collection[j]}`);
            }
        }
        times.push(count);
    }
    return Math.max(...times);
}
// first test case
console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])); // 5
// Second Test Case
console.log(mostFrequentItemCount([3, -1, -1])); // 2

/*
    1 - the outer loop using the array length
    2 - the inside loop should it use the same length? 
*/

/*
    --- More breaks 
    - Function 
        - variable count (if needed)
        - loop on the array's items
        - check how many times the items repeated
        - for each item i'll count and reset the variable
        - i'm thinking to restore these counts in an array and return the biggest.

*/


// Solve the problem using higher order functions
function frequent(collection) {
    let reducing = collection.map(function (ele, index, arr) {
        return arr[index - 1] === arr[index];
    });
    console.log(reducing);
}

frequent([3, -1, -1]);