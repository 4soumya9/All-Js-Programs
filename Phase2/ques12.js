//  Given a string, write a javascript function to count the
// occurrences of each character in the string.
const result = countCharacters("helaalo");

function countCharacters(str) {
  let map = new Map();
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  return map;
}
console.log(result);
