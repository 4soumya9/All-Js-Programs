// find the second most frequent number in JavaScript:

console.log(secondMostFrequent([1, 2, 2, 2, 2, 3, 3, 3, 4, 4])); // Output: 2 or 4
function secondMostFrequent(arr) {
  let map = new Map();
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let maxNumber = null;
  let secondmaxNumber = null;
  let mostFreq = -Infinity;
  let secondFreq = -Infinity;

  for (let [num, freq] of map) {
    if (freq > mostFreq) {
      secondFreq = mostFreq;
      secondmaxNumber = maxNumber;
      maxNumber = num;
      mostFreq = freq;
    } else if (freq > secondFreq && freq < mostFreq) {
      secondFreq = freq;
      secondmaxNumber = num;
    }
  }
  return secondmaxNumber;
}

// What is -Infinity used for?

// -Infinity is used for comparison, not for storing values.

// So we use it for:

// let max = -Infinity;
// let secondMax = -Infinity;

// Because:

// Any real frequency will be greater than -Infinity

// Helps first comparison work correctly

// Wrong Way ❌
// let maxNum = -Infinity;  // ❌ Not correct

// Because:

// maxNum is supposed to store a number from the array

// -Infinity is not part of your array

// It can confuse logic and output
