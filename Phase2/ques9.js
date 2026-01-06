// 24. Given an array, return an array where the each value is the
// product of the next two items

let arr = [3, 4, 5];
// let output=[20, 15, 12]

function product(arr) {
  let result = [];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let first = arr[(i + 1) % n];
    let second = arr[(i + 2) % n];
    result.push(first * second);
  }
  return result;
}

console.log(product(arr));
