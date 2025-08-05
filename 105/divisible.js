function divisibleBy(numbers, divisor){
    return numbers.filter((ele) => ele % divisor === 0);
}

console.log(divisibleBy([0,1,2,3,4,5,6], 4));