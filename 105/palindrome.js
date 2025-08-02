// function isPalindrome(x) {
// if (!x) return true;
//   let start = x.split('').shift().toLowerCase();
//   let end = x.split('').pop().toLowerCase();
//   return start === end;
// }

// console.log(isPalindrome(""));

function isPalindrome(x) {
  x = x.toLowerCase()
  let a = 0
  let b = x.length
  while (a < b) {
    if (x[a] != x[b-1])
      return false
    a++
    b--
  }
  console.log(a);
  return true
}

console.log(isPalindrome("abbba"));