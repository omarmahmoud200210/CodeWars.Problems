function pipeFix(numbers) {
    let start = numbers[0];
    let end = numbers[numbers.length - 1];
    let arr = [];

    for (let i = start; i <= end; i++) arr.push(i);
    
    return arr;
}
