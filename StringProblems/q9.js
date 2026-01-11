// interview Ques

//input:
const obj = {
  key1: [1, 2],
  key2: [3, 4, 5],
  key3: [6],
};

// o/p: [1, 2, 3, 4, 5, 6]

function objFlat(obj) {
  let result = [];

  for (let arr of Object.values(obj)) {
    for (let num of arr) {
      result.push(num);
    }
  }
  return result;
}
console.log(objFlat(obj));
