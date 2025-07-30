function sumOfDifferences(arr) {
    arr.reverse();
    arr.reduce(function (ele, curr) {
        return curr - ele;
    },0);
}

console.log(sumOfDifferences([-6,-7,-2,6,-7,2,-3,-7,8,-8,9,-8,-7,4,9,-1,4,6,1,-6]));


// Test Cases
/*
    [1, 2, 10]), 9
    [-3, -2, -1]), 2
*/