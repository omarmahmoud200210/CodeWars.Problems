function isPythagoreanTriple(integers) {
    let ints = integers.sort((a,b) => a - b);
    let sum = Math.pow(ints[0],2) + Math.pow(ints[1],2);
    let lastSum = Math.pow(ints[2], 2);
    return (sum === lastSum) ? true : false;
}

isPythagoreanTriple([5985, 26600, 27265]);
// assert.strictEqual(isPythagoreanTriple([3, 4, 5]), true);
// assert.strictEqual(isPythagoreanTriple([3, 5, 9]), false);