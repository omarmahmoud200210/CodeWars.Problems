function invert(array) {
    let negArr = [];
    for (arr of array) {
        negArr.push(-arr);
    }
    return negArr;
}

console.log(invert([1,-2,3,-4,5]));