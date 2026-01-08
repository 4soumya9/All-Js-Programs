// Find the smallest word in a given sentence ?

const sentence = "Find the smallest b word";

function smallestword(sentence) {
  let arr = sentence.split(" ").filter((t) => t.length > 0);

  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > smallest.length) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(smallestword(sentence));
