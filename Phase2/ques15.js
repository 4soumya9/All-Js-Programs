//Anagram method 2

console.log(isAnagram("listen41", "1silent4"));
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj = {};
  for (let s of str1) {
    obj[s] = (obj[s] || 0) + 1;
  }

  for (let t of str2) {
    if (!obj[t]) {
      return false;
    }
    obj[t]--;
  }
  return true;
}

/*First, we check if both strings have the same length; if not, they can’t be anagrams.

Then we count the frequency of each character in the first string using an object.

Next, we loop through the second string and reduce the count for each character; if any character is missing or overused, we return false.

If all characters match correctly, we return true, meaning the strings are anagrams.*/
