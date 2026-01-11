// interview Ques

//input:
const obj = {
  key1: [1, 2],
  key2: [3, 4, 5],
  key3: [6],
};

// o/p: 21

function getSum(obj) {
  let sum = 0;
  for (let arr of Object.values(obj)) {
    for (let num of arr) {
      sum += num;
    }
  }
  return sum;
}
console.log(getSum(obj)); // 21
