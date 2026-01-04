//Two Sum
let input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let input2 = 10;
// Output:[[4, 6], [3, 7], [2, 8], [1, 9]]

function TwoSum(input1, input2) {
  let seen = new Set();
  let res = [];
  for (let num of input1) {
    let comple = input2 - num;
    if (seen.has(comple)) {
      res.push([comple, num])
    }
    seen.add(num)
  }
  return res;
}

console.log(TwoSum(input1, input2));
