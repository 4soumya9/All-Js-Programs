// Maximum from nested Array
const arr = [1, [2, 500], [10, [20, 3]], 15];

function maxx(arr) {
  let max = -Infinity;

  for (let num of arr) {
    if (Array.isArray(num)) {
      let nestedMax = maxx(num); // get value from recursion
      max = Math.max(nestedMax, max);
    } else {
      max = Math.max(num, max);
    }
  }
  return max;
}
console.log(maxx(arr));
