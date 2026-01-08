//  Create a function which will accepts two arrays arr1 and
// arr2. The function should return true if every value in arr1 has
// its corresponding value squared in array2. The frequency of
// values must be same. (Effecient)

// console.log(isSameFrequency([1,2,5],[25,4,1])
let arr1 = [1, 2, 5];
let arr2 = [25, 4, 1];
function isSameFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freq1 = new Map();
  let freq2 = new Map();

  for (let num of arr1) {
    freq1.set(num, (freq1.get(num) || 0) + 1);
  }

  for (let num of arr2) {
    freq2.set(num, (freq2.get(num) || 0) + 1);
  }

  for (let key of freq1.keys()) {
    let squard = key * key;
    if (!freq2.has(squard)) {
      return false;
    }

    if (freq2.get(squard) !== freq1.get(key)) {
      return false;
    }
  }
  return true;
}

console.log(isSameFrequency([1, 2, 5], [25, 4, 1]));
