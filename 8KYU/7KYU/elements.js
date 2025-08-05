function elementsSum(arr, d = 0){
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        

        if (arr[i][arr.length - 1 - i] !== undefined) {
            console.log(arr[i][arr.length - 1 - i]);
            sum += arr[i][arr.length - 1 - i];
            console.log(d);
        } 
        else {
            sum += d;
        }
    }

    console.log(`Sum: ${sum}`);
}

// Random test case
// index 3 -> 30
// index 2 -> 79
// index 1 -> -923
// index 0 -> 4
// console.log(`Result of this equasion: ${-923 + 79 + 30 + 4}`);
// elementsSum([ 
// [-682, 571, -3, 30, -19, 580, -615, 391, 68, -9, 19, -610, -37, -10, -82, -255, -6, -5, -646, -986], 
// [-64, 184, 79, 8, 1, 74, -90, 6, -5, -9, 490, 93, -6, 3, 0, -553, -26, -7, -89], 
// [8, -923, -4, -185, -107, -563, -212, -18, 798, -93, 9, -545, -9, 9, 907, 732, -64, -868, -39, 4, -977, 97, 802, -988, 80, 250, -604, -659, 549, 89, -949, -943, -114, -206, -1, -716], 
// [4, -2, 549, -58, 477, 29, 425, -356, 14, 1, -920, 4, 3, 26, 22, -495, 1, -67, 934, -10, 14, 0, -932, -530, 7, 810, 665, -642, -1, 47]]);

// first test case
//elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4],[80, 8, 7, 4],[80, 8, 7, 4]]); // 16
// // Second test case
// elementsSum([[3], [4, 6, 5, 3, 2], [9, 8, 7, 4]]); // 15
// // Third test case
// elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []]); // 7
// //Fourth test case
elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], []],5); // 12
// //Fifth test case
// elementsSum([[3, 2], [4], []]); // 0


//   2
//   1
//   0
/*
    - Function
        we have a an array contains arrays
        i need to sum the following indexes (2,1,0) and return the sum
        if i didn't find any of these indexes i'll use the D :
            - if the nested array contain one item or empty i'll use D variable
            - that means i need to do conditions to check
*/

function forTest() {
    'use strict';
    height = 50;
    return height;
}

console.log(forTest());