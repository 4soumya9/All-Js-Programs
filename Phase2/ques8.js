// Find the 2nd largest element from a given array ?
// [100,20,112,22]

// let arr = [100, 20, 112, 22];
let arr=[10, 5, 20, 8, 12];
function secondLargest(arr) {
  let highest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      second = highest;
      highest = arr[i];
    } else if (arr[i] < highest && second < arr[i]) {
      second = arr[i];
    }
  }
  return second;
}
console.log(secondLargest(arr));
