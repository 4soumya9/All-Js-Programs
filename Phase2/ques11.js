// flatten an nested array
let nested = [1, [2, 3], [4, [5, 6, [7, 80000]]]];

// let flat = nested.flat(Infinity);
// console.log(flat);

function flatt(nested) {
  let result = [];

  for (let arr of nested) {
    if (Array.isArray(arr)) {
      result.push(...flatt(arr));
    } else {
      result.push(arr);
    }
  }
  return result;
}
// console.log(flatt(nested));

console.log(flatt([1, [2, [3, 4], 5], 6]));
// [1, 2, 3, 4, 5, 6]
