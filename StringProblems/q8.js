// Expand Encoded String
// Example:
// Input: "3a2b4c"
// Output: "aaabbcccc"

let input = "3a2b4c";

function encodee(input) {
  let result = "";
  let num = "";

  for (let char of input) {
    if (!isNaN(char)) {
      num += char;
    } else {
      result += char.repeat(Number(num));
      num = "";
    }
  }
  return result;
}

console.log(encodee(input));
