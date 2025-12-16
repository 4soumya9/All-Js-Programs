// reverse a string
// Reverse Character String
// Input : s = ["h", "e" ,"l" ,"l" ,"o"]

// Output : ["o", "l", "l", "e", "h"]
let input = ["h", "e", "l", "l", "o"];
function revv(input) {
  let i = 0;
  let j = input.length-1;
  while (i < j) {
    [input[i], input[j]] = [input[j], input[i]];
    i++;
    j--;
  }
  return input
}
console.log(revv(input))
