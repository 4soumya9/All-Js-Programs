// reverse a string
// const input = "  i like   this program very much  ";
// console.log(reversedSen(input));

let input = "  i like   this program very much  ";
function rev(input) {
  let res = "";
  let words = input.split(" ").filter((t) => t.length > 0);
  let stack = [...words];
  while (stack.length > 0) {
    let ele = stack.pop();
    res += ele + " ";
  }
  return res.trim();
}
console.log(rev(input));
