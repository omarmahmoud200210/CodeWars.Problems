function solve (arr) {
    let alphabets = [];
    for (let i = 1; i <= 26; i++) alphabets.push(i);
    
    let counts = [];
    
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase();
        let count = 0;
        for (let y = 0; y < word.length; y++) {
            if (word.charCodeAt(y) - 96 === alphabets[y]) {
                count++;
            }
        }
        counts.push(count);
    }
    return counts; 
}

// First Test Case
solve(["abode","ABc","xyzD"]);
// Second Test Case
solve(["abide","ABc","xyz"]);
// Third Test Case
solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]);
// Fourth Test Case
solve(["encode","abc","xyzD","ABmD"]);

// A clever solution
const solvex = (arr) => {
    let chars = [];
    for (let i = 97; i <= 122; i++) chars.push(String.fromCharCode(i));
    
    let solution = arr.map(function (ele) {
        return ele.toLowerCase().split('').filter(function (ele, index) {
            return index === chars.indexOf(ele);
        }).length;
    });

    console.log(solution);
}

solvex(["abode","ABc","xyzD"]);