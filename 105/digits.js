const digitize = (number) => {
    let convertIntoString = String(number);
    let numbers = convertIntoString.split('');
    return Array.from(numbers, (ele) => parseInt(ele)).reverse();
}
    


console.log(digitize(35231));