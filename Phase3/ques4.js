// function fact(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     return num * fact(num - 1);
//   }
// }

// factorail
const fact = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log(fact(3));
