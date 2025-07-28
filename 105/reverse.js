function solution (str) {
    return str.split('').reverse().join('');
}

//console.log(reverse("world"));

// Build the reverse function
function reverse(str) {
    // 1 - Converting the string into an array
    let newArray = [];
    // 2 - reverse process
    for (let i = 0; i < str.length; i++) {
        newArray.unshift(str[i]);
    }
    return newArray.join('');
}

console.log(reverse("Omar"));