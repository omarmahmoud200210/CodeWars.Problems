const flip = (d , a) => d === "R" ? a.sort((a,b) => a - b) :
a.sort((a, b) => a - b).reverse();


const NewFlip = (d, a) => a.sort((a, b) => d === "R" ? a - b : b - a);

// First Test Case
console.log(flip("R", [3, 2, 1, 2]));

//Second Test Case
console.log(flip("L", [1, 4, 5, 3, 5]));

// Third Test Case

let arr = [13, 2, 4, 7, 93]; // Right Case 
console.log(arr.sort((a,b) => a - b));

console.log(NewFlip("L", [1, 4, 5, 3, 5]));

/*
    Test Cases:-
    flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
    flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
*/