//capitalize the first word of the sentence
//o/p:"Hello world from javascript"

let input = "hello world from javascript";

function capitalizeTheFirstWord(input) {
  let res = "";
  let words = input.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    res += word.charAt(0).toUpperCase() + word.slice(1) + " ";
  }
  return res;
}

console.log(capitalizeTheFirstWord(input));
