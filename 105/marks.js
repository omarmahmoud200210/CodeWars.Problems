// Vowels -> aeiou
function replace(s) {
    
    // First way
    let vowels = ["a", "e", "i", "o", "u"];
    let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr[i] = "!";
        }
    }

    // Second Way
    let RegVowels = /a|e|i|o|u/ig; 
    return s.replace(RegVowels,"!");
}
replace("Hi");