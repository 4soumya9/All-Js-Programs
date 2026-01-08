// find max consequtive 1s

console.log(findConsecutive([1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1]));

let arr = [1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1];
function findConsecutive(arr) {
  let count = 0;
  let max = 0;
  for (let num of arr) {
    if (num === 1) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }
  return max;
}
