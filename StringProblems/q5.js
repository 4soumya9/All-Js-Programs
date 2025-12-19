//capitalize the first word of the sentence
//o/p:"Hello world from javascript"

let input = "hello world from javascript";

// function capitalizeTheFirstWord(input) {
//   let res = "";
//   let words = input.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     words += word.charAt(0).toUpperCase() + word.slice(1) + " ";
//   }
//   return res;
// }

function capital(input) {
  let words = input.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" ");
}

// console.log(capitalizeTheFirstWord(input));
console.log(capital(input));
