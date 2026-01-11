// Infinite Currying

// add(1)(2)(3)(4)(); // 10

function currying(a) {
  let sum = a;
  function next(b) {
    if (b === undefined) {
      return sum;
    }
    sum += b;
    return next;
  }
  return next;
}

console.log(currying(1)(2)(3)(40)());
