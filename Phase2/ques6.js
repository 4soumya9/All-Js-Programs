// Write a javascript program to get below output from given
// input
// I/P abbcccddddeea
// O/P 1a2b3c4d2e1a

let input = " abbcccddddeea";

function encoder(input) {
  input = input.trim();
  let result = "";
  let count = 1;
  for (let i = 1; i < input.length; i++) {
    if (input[i - 1] === input[i]) {
      count++;
    } else {
      result += count + input[i - 1];
      count = 1;
    }
  }
  result += count + input[input.length - 1];
  return result;
}

console.log(encoder(input));
