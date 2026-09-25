// Maximum Length Subarray with Given Sum

// console.log(maxLenSubarray([1, -1, 5, -2, 3], 3)); // Output: 4
console.log(maxLenSubarray([4, 1, 1, 1, 2, 3, 5], 5)); // Output: 4

function maxLenSubarray(arr, k) {
  let map = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (k === sum) {
      maxLen = i + 1;
    }
    if (map.has(sum - k)) {
      maxLen = Math.max(maxLen, i - map.get(sum - k));
    }
    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }
  return maxLen;
}
