function index (numbers,index) {
    return (numbers[index] === undefined) ? -1 :  Math.pow(numbers[index], index);
}

console.log(index([1],0));

// ---- Test Cases
index([1,2,3,4], 2); // equal 9
index([5,1,3,3], 3); // equal 27
index([1,2], 3);    // equal -1
index([1], 0);  // equal 1