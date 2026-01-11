//Currying
// Supports BOTH add(1,2) and add(1)(2)

function add(a, b) {
  if (b !== undefined) {
    return a + b;
  }

  return function (b) {
    return a + b;
  };
}

// console.log(add(1, 2));
// console.log(add(1)(20));
