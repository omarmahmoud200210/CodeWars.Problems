// This is my first way to solve the problem
function elevatorDistance(array) {
    let result = 0;
    let arr = [];
    for (let i = 0; i < array.length - 1; i++) {

        arr.push(array[i] - array[i + 1]);
        
        if (arr[i] < 0) {
            arr[i] *= -1;
        }
        
        result += arr[i];
    }
    return result < -1 ? result * -1 : result;
}

function elevatorDistance2(array) {
    let result = 0;
    for (let i = 0; i < array.length - 1; i++) {
        result += Math.abs(array[i] - array[i + 1]);
    }
    return result;
}

// assert.strictEqual(elevatorDistance([5,2,8]), 9);
console.log(elevatorDistance2([5,2,8]));
// assert.strictEqual(elevatorDistance([1,2,3]), 2);
//console.log(elevatorDistance2([1,2,3]));
// assert.strictEqual(elevatorDistance([7,1,7,1]), 18);
//console.log(elevatorDistance2([7,1,7,1]));

//console.log(elevatorDistance2([22,25,9,26,9,25,14,8,11,16,6,16,1,2,26,4,25,8,24]));

function elevatorDistance3(array) {
  var distance = 0;
  for (var i = 0; i < array.length - 1; i++) {
    distance += Math.abs(array[i] - array[i + 1]);
  }
  return distance;
}

console.log(elevatorDistance3([5,2,8]));