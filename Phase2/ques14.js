//cheack anagram
// console.log(isAnagram("listen", "silent"));
// function isAnagram(str1, str2) {
var isana = (s, t) =>
  s.split("").sort().join("") === t.split("").sort().join("");
// return isana;
console.log(isana("listen", "silent4"));
