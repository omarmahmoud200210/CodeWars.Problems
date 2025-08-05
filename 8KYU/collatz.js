function hotpo(number) {
    if (number === 0) return 0;
    
    let count = 0;
    while(number > 1) {
        count++;
        if (number % 2 === 0) {
            number = number / 2;
        }
        else {
            number = 3 * number + 1;
        }
    }
    return count;
}

console.log(hotpo(23));