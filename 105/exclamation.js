// First Way 
function removeExclamationMarks(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
        if (arr[i] === "!") {
            arr.splice(arr.indexOf(arr[i]),1);
        }
    }
    return arr.join('');
}
console.log(removeExclamationMarks("Hello World!"));

// Second Way
let exclamation = (s) => {
    return s.split('').filter((ele) => ele !== '!').join('');
}
console.log(exclamation("Hello World!"));