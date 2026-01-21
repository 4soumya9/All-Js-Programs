// Find Max in nested Array
// const arr = [1, [2, 5], [10, [20, 3]], 15];
const arr = [1, [2, 500], [10, [20, 3]], 15];

// function maxx(arr) {
//   let max = -Infinity;
//   function helper(nestedArr) {
//     for (let item of nestedArr) {
//       if (Array.isArray(item)) {
//         helper(item);
//       } else {
//         if (item > max) {
//           max = item;
//         }
//       }
//     }
//   }
//   helper(arr);
//   return max;
// }

// console.log(maxx(arr));

// better version
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
