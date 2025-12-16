//reverse a string
// Ques: Reverse a word
// i/p: Hello
// o/p: olleH
let word = "Hello";
function revv(word) {
  let res = "";
  for (let i = word.length - 1; i > 0; i++) {
    res += word[i];
  }
  return res;
}

console.log(revv(word));
// function rev1(word) {
//   let res = word.split("").reverse().join("");
//   return res;
// }

console.log(rev1(word));
