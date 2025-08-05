function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return []; 
    let countOfPositive = 0;
    let sumOfNegatives = 0;
  for (let i = 0; i < input.length; i++) {
    (input[i] >= 1) ? countOfPositive++ : sumOfNegatives += input[i];
  }
  return [countOfPositive,sumOfNegatives];
}

let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
let anotherTestData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(testData));