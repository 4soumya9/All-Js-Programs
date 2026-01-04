//decoder
// input: "1a2b3c4d2e1a"

// output:"abbcccddddeea"

// let input = "1a2b3c4d2e1a";
let input = "3a5n5v";

function decoder(input) {
  let result = "";
  let count = "";

  for (let ch of input) {
    if (!isNaN(ch)) {
      count += ch; // if ch is a number
    } else {
      result += ch.repeat(Number(count));
      count = "";
    }
  }
  return result;
}

console.log(decoder(input));
