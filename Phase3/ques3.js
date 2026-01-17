let str = "madam";
// function checkPallindrome(str) {
//   let len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - i - 1]) {
//       return "not ";
//     }
//   }
//   return "palindrome";
// }

function checkPallindrome(str) {
  const reev = str.split("").reverse().join("");
  return str === reev;
}

console.log(checkPallindrome("madam"));
