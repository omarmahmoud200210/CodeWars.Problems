function squareSum (arr) {
    return arr.reduce((acc, current) => (current * current) + acc,0);
}
console.log(squareSum([1,2]));